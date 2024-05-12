import React, { useRef, useState } from 'react';
import { useQuery } from 'react-query';
import { getAdminUser } from '../../apis/api/adminApi';

function FindUsernamePage(props) {
    const [searchData, setSearchData] = useState({
        name: '',
        phone: '',
        email: ''
    });
    const [username, setUsername] = useState("");
    
    const inputRefs = {
        name: useRef(null),
        phone: useRef(null),
        email: useRef(null)
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setSearchData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const findUserQuery = useQuery(
        ['findUser', searchData.name, searchData.phone, searchData.email],
        () => {
            if (!searchData.name || !searchData.phone || !searchData.email) {
                return null;
            }
            return getAdminUser(searchData);
        },
        {
            enabled: false,
            refetchOnWindowFocus: false,
            onSuccess: (response) => {
                console.log(response)
                if (response && response.data.length > 0) {
                    // 찾은 사용자가 있을 경우 사용자의 아이디를 설정합니다.
                    setUsername(response.data[0].username);
                } else {
                    // 해당 정보로 사용자를 찾을 수 없는 경우 메시지를 설정합니다.
                    setUsername('해당 정보로 사용자를 찾을 수 없습니다.');
                }
            },
            onError: (error) => {
                // 에러가 발생한 경우 에러 메시지를 설정합니다.
                console.error('에러 발생:', error);
                setUsername('검색 중 오류가 발생했습니다.');
            }
        }
    );

    const handleFindUsername = () => {
        findUserQuery.refetch();
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
                    ref={inputRefs.name}
                />
                <input
                    type="text"
                    name="phone"
                    placeholder="전화번호"
                    value={searchData.phone}
                    onChange={handleInputChange}
                    ref={inputRefs.phone}
                />
                <input
                    type="text"
                    name="email"
                    placeholder="이메일"
                    value={searchData.email}
                    onChange={handleInputChange}
                    ref={inputRefs.email}
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

export default FindUsernamePage;

