/** @jsxImportSource @emotion/react */
import * as s from "./style"
import { useEffect, useState } from "react";
import { getReadingCountRequest, getReadingDataRequest } from "../../apis/api/mypage";
import { useMutation, useQuery } from "react-query";
import { Link, useSearchParams } from "react-router-dom";
import ReadingPageNumbers from "../ReadingPageNumbers/ReadingPageNumbers";
import { bookReturn } from "../../apis/api/loanApi";
import { BsCheckCircle } from "react-icons/bs";
import { FcHighPriority } from "react-icons/fc";
import { FcCalendar } from "react-icons/fc";
import { FcClock } from "react-icons/fc";
// import { FaCheckCircle } from "react-icons/fa";
// import { FaCheck } from "react-icons/fa";





function ReadingBookList(data) {
    const id = data.data.data.userId;

    const [ readingBookList, setReadingBookList ] = useState([]);
    const [ searchParams ] = useSearchParams();
    const [ checkedList, setCheckedList ] = useState([]);
    const [ searchCondition, setSearchCondition ] = useState({
        userid: id,
        page: parseInt(searchParams.get("page"))
    });

    const [ progressPercent, setProgressPercent ] = useState(0);

    const [ buttonStates, setButtonStates ] = useState(Array(readingBookList.length).fill(false));
    const handleButtonClick = (index) => {
        const newButtonStates = [...buttonStates];
        newButtonStates[index] = !newButtonStates[index];
        setButtonStates(newButtonStates);
    };
    
    const [ activeFilter, setActiveFilter ] = useState(1);
    const handleFilterClick = (filterID) => {
        if(filterID !== activeFilter) {
            setActiveFilter(filterID);
        }
    };

    useEffect(() => {
        buttonStates.forEach((value, index) => {
            // console.log(`Index: ${index}, Value: ${value}`);
        })
    }, [buttonStates])

    useEffect(() => {
        setSearchCondition(searchCondition => {
            return {
                ...searchCondition,
                page: parseInt(searchParams.get("page"))
            }
        })
    }, [searchParams])

    const getReadingBooksQuery = useQuery(
        ["getReadingBooksQuery", searchCondition],
        async () => await getReadingDataRequest(searchCondition),
        {
            retry: 0,
            refetchOnWindowFocus: false,
            onSuccess: response => {
                // console.log(response.data);
                setReadingBookList(response.data.reading)
            },
            onError: error => {
                console.log("error");
            }
        }
    );

    const getReadingBooksCountQuery = useQuery(
        ["getReadingBooksCountQuery", readingBookList],
        async () => await getReadingCountRequest(searchCondition),
        {
            retry: 0,
            refetchOnWindowFocus: false,
            onSuccess: response => {
                // console.log(response.data);
            }
        }
    );

    const returnBookMutation = useMutation({
        mutationKey: "returnBookMutation",
        mutationFn: bookReturn,
        onSuccess: response => {
            getReadingBooksQuery.refetch();
            window.location.reload();
        },
        onError: error => {

        }
    });

    const onCheckedElement = (checked, item) => {
        if(checked) {
            setCheckedList(checkedList => [...checkedList, item]);
        } else if (!checked) {
            setCheckedList(checkedList => checkedList.filter(el => el !== item));
        }
    };
   
    const checkedReturns = () => {
        checkedList.forEach(loanId => {
            returnBookMutation.mutate(loanId);
        });
        
    }
    useEffect(() => {
        console.log(checkedList)
    }, [checkedList])
    return (
        <>
            <div css={s.header(activeFilter)}>
                <div>
                    <Link css={s.filter} to={"/mypage/reading?page=1&filter=1"}
                    onClick={() => handleFilterClick(1)}>전체(남은시간순)</Link>
                </div>
                <div>
                    <Link css={s.filter} to={"/mypage/reading?page=1&filter=2"}
                    onClick={() => handleFilterClick(2)}>평점높은순</Link>
                </div>
                <div>
                    <Link css={s.filter} to={"/mypage/reading?page=1&filter=3"}
                    onClick={() => handleFilterClick(3)}>평점낮은순</Link>
                </div>
                <div>
                    <Link css={s.filter} to={"/mypage/reading?page=1&filter=4"}
                    onClick={() => handleFilterClick(4)}>리뷰많은순</Link>
                </div>
                <div>
                    <Link css={s.filter} to={"/mypage/reading?page=1&filter=5"}
                    onClick={() => handleFilterClick(5)}>리뷰적은순</Link>
                </div>
            </div>
            <div css={s.container}>
                {!getReadingBooksQuery.isLoading &&
                    readingBookList.length === 0 
                    ? <h1>대출 중인 도서가 없습니다.</h1>
                    : readingBookList.map((loan, index) => {
                        const currentDate = new Date();
                        const endDate = new Date(loan.dueDate);
                        const startDate = new Date(loan.loanDate);

                        const timeDiff = endDate.getTime() - currentDate.getTime();
                        const totalTime = endDate.getTime() - startDate.getTime();

                        const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
                        const hoursDiff = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                        const minutesDiff = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
                        
                        // console.log((totalTime - timeDiff) / totalTime * 100)
                        const per = (timeDiff / totalTime) * 100
                        // console.log(per.toFixed(1))
                        return (
                            <div css={s.datas(buttonStates[index])}>
                            <div css={s.data(buttonStates[index])} key={loan.loanId}>
                                <div css={s.bookData}>
                                    <div css={s.checkBox}>
                                        
                                        <input type="checkbox" id={`check${loan.loanId}`} style={{display: "none"}} onChange={e => {onCheckedElement(e.target.checked, loan.loanId);}}/>
                                        <label htmlFor={`check${loan.loanId}`}>
                                            <BsCheckCircle 
                                                    css={s.checkBtn(buttonStates[index])} size={25} onClick={() => handleButtonClick(index)} />
                                        </label>
                                    </div>
                                    <div css={s.bookImage}>
                                        <img src={loan.imageUrl} alt=""></img>
                                    </div>
                                    <div css={s.bookInfo}>
                                        <div css={s.top}>
                                            <div css={s.bookName}>{loan.bookName}</div>
                                            <div css={s.authorName}>{loan.authorName}</div>
                                            <div css={s.publisherName}>{loan.publisherName}</div>
                                        </div>
                                        <div css={s.bot(per)}>
                                            <div css={s.time}>
                                                <FcClock size={22}/>
                                                {per > 0
                                                    ? <p>{daysDiff > 0 && `${daysDiff}일 `}{hoursDiff > 0 && `${hoursDiff}시간 `}{minutesDiff > 0 && `${minutesDiff}분 `}</p>
                                                    : <p>연체됨</p>
                                                }
                                            </div>
                                            <div css={s.period}>
                                                <FcCalendar size={22}/>
                                                <p>{loan.loanDate.replace("T", " ").substring(0, 10)} ~ {loan.dueDate.replace("T", " ").substring(0, 10)}</p>
                                            </div>
                                            <div>
                                                <progress value={per} max={100}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div css={s.status}>
                                        {per < 7.1424 ? <FcHighPriority css={s.warn} size={30}/> : <></>}
                                    </div>
                                </div>
                            </div>
                            </div>
                        )
                    })
                }
            </div>
            {!getReadingBooksCountQuery.isLoading &&
                <div css={s.page}>
                    <ReadingPageNumbers data={getReadingBooksCountQuery.data?.data}/>
                    <button onClick={() => checkedReturns(checkedList)}>반납</button>
                </div>
            }
        </>
    );
}

export default ReadingBookList;