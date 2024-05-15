import React, { useRef, useState } from 'react';
import { findUserinfo } from '../../apis/api/adminApi';
import { useQuery } from 'react-query';


function SearchUsernamePage(props) {

    const [username, setUsername] = useState("");
    const [searchData, setSearchData] = useState({
        name: '',
        phone: '',
        email: ''
    });
    
    const nameInputRef = useRef();
    const phoneInputRef = useRef();
    const emailInputRef = useRef();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setSearchData(prevSearchData => ({
            ...prevSearchData,
            [name]: value
        }));
    };

    const findUser = useQuery(
        ["findUser"],
        async () => {
            await findUserinfo(searchData);
        },
        {
            enabled: false,
            refetchOnWindowFocus: false,
            retry: 0,
            onSuccess: response => {
                console.log(searchData);
                setUsername(response?.data.username);
            },
            onError: (error) => {
                console.error("에러발생: ", error);
            }
        }
    )

    const handleFindUsername = () => {
        findUser.refetch();
    };

    return (
        <div>
            <div>
                <input
                    type="text"
                    name="name"
                    placeholder="이름"
                    value={searchData.name}
                    onChange={handleInputChange}
                    ref={nameInputRef}

                />
                <input
                    type="text"
                    name="phone"
                    placeholder="전화번호"
                    value={searchData.phone}
                    onChange={handleInputChange}
                    ref={phoneInputRef}

                />
                <input
                    type="text"
                    name="email"
                    placeholder="이메일"
                    value={searchData.email}
                    onChange={handleInputChange}
                    ref={emailInputRef}

                />
            </div>
            <div>
                <button onClick={() => handleFindUsername(searchData)}>아이디 찾기</button>
            </div>
            <div>
                {/* 사용자의 아이디를 표시합니다. */}
                {username && <p>아이디: {username.substring(0, 4)}{username.substring(3).replace(/./g, "*")}</p>}
            </div>
        </div>
    );
}


export default SearchUsernamePage;