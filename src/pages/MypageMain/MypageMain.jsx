/** @jsxImportSource @emotion/react */
import { useState } from "react";
import * as s from "./style"
import { getMostLoanedRequest, getSummaryCountRequest } from "../../apis/api/mypage";
import { useQuery } from "react-query";
import example from "../../assets/free-icon-feeder-1725449.png";

function MypageMain(data) {
    const id = data.data.data.userId;

    const [ summary, setSummary ] = useState({
        returned: 0, 
        reading: 0,
        overdue: 0
    });

    const [ preference, setPreference ] = useState({
        category: {
            name: "",
            count: 0
        },
        mostLoaned: {
            bookName: "",
            authorName: "",

        }
    });

    const [ mostInfo, setMostInfo ] = useState({
        authorName: "",
        bookName: "",
        categoryName: "",
        count: 0,
        publisherName: "",
        url: ""
    });

    const getSummaryCountQuery = useQuery(
        ["getSummaryCountQuery"],
        async () => getSummaryCountRequest(id),
        {
            retry: 0,
            refetchOnWindowFocus: false,
            onSuccess: response => {
                console.log(response.data)
                setSummary(response.data);
            },
            onError: error => {
                console.log("error");
            }
        }
    );

    const getMostLoanedQuery = useQuery(
        ["getMostLoanedQuery"],
        async () => getMostLoanedRequest(id),
        {
            retry: 0,
            refetchOnWindowFocus: false,
            onSuccess: response => {
                console.log(response.data)
                setMostInfo(response.data)
            },
            onError: error => {
                console.log("error");
            }
        }
    );

    return (
        <div css={s.layout}>
            <h1>대출 및 반납 현황</h1>
            <div css={s.activitys}>
                <div css={s.activity}>
                    <div css={s.act}>
                        <div css={s.title}>
                            <h2>전체 대출</h2>
                        </div>
                        <div css={s.info}>
                            <div>
                                <h1>{summary.returned}</h1>
                            </div>
                            <div>
                                <h2>&nbsp;건</h2>
                            </div>
                        </div>
                    </div>
                    <div css={s.act}>
                        <div css={s.title}>
                            <h2>현재 대출</h2>
                        </div>
                        <div css={s.info}>
                            <div><h1>{summary.reading}</h1></div>
                            <div><h2>&nbsp;건</h2></div>
                        </div>
                    </div>
                    <div css={s.act}>
                        <div css={s.title}>
                            <h2>연체</h2>
                        </div>
                        <div css={s.info}>
                            <div><h1>{summary.overdue}</h1></div>
                            <div><h2>&nbsp;건</h2></div>
                        </div>
                    </div>
                </div>
            </div>
            <div css={s.activitys2}>
                <div css={s.activity2}>
                    <div css={s.a}> 
                        <h1>카테고리</h1>
                    </div>
                    <div css={s.favorite}>
                        <div css={s.favoriteInfo}>
                            <p>가장 선호하는 카테고리는 <span>{summary.favoriteCategoryName}</span>(으)로, 지금까지&nbsp;총&nbsp;<span>{summary.favoriteCategoryCount}</span>회 빌렸습니다. </p>
                        </div>
                    </div>
                    <div css={s.most}>
                        <div css={s.favoriteIcon}>
                            <img src={example} alt="" /> 
                        </div>
                    </div>
                </div>
                <div css={s.activity2}>
                    <div css={s.ab}>
                        <h1>가장 많이 읽은 책</h1>
                    </div>
                    <div css={s.cd}>
                        <div>
                            <p>{mostInfo.bookName}</p>
                            <p>{mostInfo.authorName}</p>
                            <p>{mostInfo.publisherName}</p>
                            <p>총{mostInfo.count}회 읽었습니다.</p>
                        </div>
                        <div>
                            <img src={mostInfo.url} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MypageMain;