import React, { useRef, useState } from 'react';
import { findUserinfo } from '../../apis/api/adminApi';
import { useQuery } from 'react-query';

function SearchUserInfo(props) {
    
    const [userInfo, setUserInfo] = useState(null); 

    const [searchData, setSearchData] = useState({
        username: '',
        name: '',
        phone: '',
        email: ''
    });
    
      const inputRef = useRef();
    
      const handleInputChange = (e) => {
        setSearchData(searchData => {
            return {
                ...searchData,
                [e.target.name]: e.target.value
            }
        });
    };
    
    const findUser = useQuery(
        ["findUser"],
        async () => {
            if (!searchData.username || !searchData.name || !searchData.phone || !searchData.email) {
                return null;
            }
            return await findUserinfo(searchData);
        },
        {
            refetchOnWindowFocus: false,
            retry: 0,
            onSuccess: response => {
               if (response) {
                setUserInfo(response.userId);
               } else {
                setUserInfo(null);
               }
            },
            onError: (error) => {
                console.error("에러발생: ", error);
            }
        }
    )
    
    return (
        <div>
            {/* 회원 정보를 입력하는 폼 */}
            <input
                type="text"
                name="username"
                placeholder="아이디"
                value={searchData.username}
                onChange={handleInputChange}
                ref={inputRef}
            />
            <input
                type="text"
                name="name"
                placeholder="이름"
                value={searchData.name}
                onChange={handleInputChange}
                ref={inputRef}
            />
            <input
                type="text"
                name="phone"
                placeholder="전화번호"
                value={searchData.phone}
                onChange={handleInputChange}
                ref={inputRef}
            />
            <input
                type="text"
                name="email"
                placeholder="이메일"
                value={searchData.email}
                onChange={handleInputChange}
                ref={inputRef}
            />
        </div>
    );
}

export default SearchUserInfo;