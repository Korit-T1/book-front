import React, { useRef, useState } from 'react';
import { findUserinfo } from '../../apis/api/adminApi';
import { useQuery } from 'react-query';
import EditPassword from '../EditPassword/FindPasswordEdit';

function SearchUserInfo(props) { 

    const [ userInfo, setUserInfo ] = useState({
        userId:'',
        username:'',
        name:''
    })


    const [searchData, setSearchData] = useState({
        username: '',
        name: '',
        phone: '',
        email: ''
    });
    
      const inputRef = useRef();
    
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
            if (!searchData.username || !searchData.name || !searchData.phone || !searchData.email) {
                return null;
            }
            return await findUserinfo(searchData);
        },
        {
            refetchOnWindowFocus: false,
            retry: 0,
            onSuccess: response => {
                setUserInfo(response?.data)
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
            <div>
                <button onClick={handleFindUsername}>계정 찾기</button>
            </div>
            <div>
                {userInfo?.name && <p>이름: {userInfo?.name}님의 계정이 확인되었습니다.</p>}
            </div>
            <div>
                <EditPassword userId={userInfo?.userId}/>
            </div>
        </div>
    );
}

export default SearchUserInfo;