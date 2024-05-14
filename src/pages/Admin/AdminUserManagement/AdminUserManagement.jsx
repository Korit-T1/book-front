/** @jsxImportSource @emotion/react */
import { useSearchParams } from "react-router-dom";
import * as s from "./style"
import { useEffect, useRef, useState } from "react";
import { getAdminUser } from "../../../apis/api/adminApi";
import { useQuery } from "react-query";

export default function NewPost() {
    const [ searchParams, setSearckParams ] = useSearchParams();
    const [ adminUserList, setAdminUserList ] = useState([]);
    const [ searchData, setSearchData ] = useState({
      username: searchParams.get("username"),
      name: searchParams.get("name")
    });
  
    const inputRef = useRef();

    const handleSearchDataChange = (e) => {
      setSearchData(searchData => {
        return {
          ...searchData,
          [e.target.name]: e.target.value
        }
      })
    }
    
    
    useEffect (() => {
    console.log(searchData)
    console.log(adminUserList)
  }, [adminUserList])

  const adminUserQuery = useQuery(
    ["adminUserQuery"],
    async () => await getAdminUser(searchData),
    {
      retry: 0,
      refetchOnWindowFocus: false,
      onSuccess: response => {
        setAdminUserList(response?.data)
      },
      onError: error => {
        console.log("error");
      }
    }
  )

    return (
      <div css={s.background}>
        <div css={s.layout}>
          <div css={s.inputBox}>
            <input 
              type="text"
              name="username"
              value={searchData.text}
              onChange={handleSearchDataChange}
              ref={inputRef}
              />
            <input 
              type="text" 
              name="name"
              value={searchData.text}
              onChange={handleSearchDataChange}
              ref={inputRef}
            />
            <button onClick={() => adminUserQuery.refetch()}>검색</button>
          </div>
          <div>
            <table>
              <thead>
                <tr>
                  <th>아이디</th>
                  <th>이름</th>
                  <th>성별</th>
                  <th>이메일</th>
                  <th>나이</th>
                  <th>주소</th>
                  <th>휴대폰</th>
                  <th>생년월일</th>
                </tr>
              </thead>
              <tbody>
                {
                  adminUserList.length == 0 ? <></> : 
                  adminUserList.map(
                    adminUsers =>
                    <tr key={adminUsers.userId}>
                      <td>{adminUsers.username}</td>
                      <td>{adminUsers.name}</td>
                      <td>{adminUsers.gender}</td>
                      <td>{adminUsers.email}</td>
                      <td>{adminUsers.age}</td>
                      <td>{adminUsers.address}</td>
                      <td>{adminUsers.phone}</td>
                      <td>{adminUsers.birth}</td>
                    </tr>
                  )
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
  