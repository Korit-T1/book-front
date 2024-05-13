import React, { useRef, useState } from 'react';
import { useQuery } from 'react-query';
import { findUserinfo } from '../../apis/api/adminApi';

function FindUserNamePage(props) {

    const [username, setUsername] = useState("");
    const [searchData, setSearchData] = useState({
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
            if (!searchData.name || !searchData.phone || !searchData.email) {
                return null;
            }
            return await findUserinfo(searchData);
        },
        {
            refetchOnWindowFocus: false,
            retry: 0,
            onSuccess: response => {
                console.log(searchData);
                if(response && response.data) {
                    setUsername(response.data.username);
                } else {
                    setUsername("해당 사용자의 정보를 찾을 수 없습니다.")
                }
                
            },
            onError: (error) => {
                console.error("에러발생: ", error);
                setUsername("검색 중 오류가 발생했습니다.");
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
            <div>
                <button onClick={handleFindUsername}>아이디 찾기</button>
            </div>
            <div>
                {/* 사용자의 아이디를 표시합니다. */}
                {username && <p>찾은 아이디: {username}</p>}
            </div>
        </div>
    );
}

export default FindUserNamePage;

