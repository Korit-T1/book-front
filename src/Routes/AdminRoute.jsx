import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminSigninPage from '../pages/Admin/AdminSigninPage/AdminSigninPage';
import AdminMainPage from '../pages/Admin/AdminMainPage/AdminMainPage';
import AdminUserManagement from '../pages/Admin/AdminUserManagement/AdminUserManagement';
import AdminSideBar from '../pages/Admin/AdminSideBar/AdminSideBar';
import { useState } from "react";
import { getAdminPrincipalRequest } from "../../src/apis/api/principal";
import { useQuery } from "react-query";
import NoticeBoardWritePage from '../pages/NoticeBoardWritePage/NoticeBoardWritePage';
import AdminLoanManagement from '../pages/Admin/AdminLoanManagement/AdminLoanManagement';
import AdminBookManagement from '../pages/Admin/AdminBookManagement/AdminBookManagement';
import BoardDetailPage from '../pages/BoardDetailPage/BoardDetailPage';
import BoardModifyPage from '../pages/BoardModifyPage/BoardModifyPage';


function AdminRoute(props) {
    const [ isLogin, setLogin ] = useState(false);
    const adminPrincipalQuery = useQuery(["adminPrincipalQuery"], getAdminPrincipalRequest,
    {
        retry: 0,
        refetchOnWindowFocus: false,
        onSuccess: response => {
            console.log(response);
            setLogin(true);
        },
        onError: error => {
            console.log("error");
            setLogin(false);
        }
    });

    return (
        <>
            {
                adminPrincipalQuery.isLoading 
                ? <></>
                : !isLogin ? <AdminSigninPage /> 
                : 
                <>
                <Routes>             
                    <Route path='/' element={ <AdminMainPage /> } />             {/* 원래는 mainpage */}
                    <Route path='/signinpage' element={ <AdminSigninPage /> } /> {/* 관리자 로그인 */}
                    <Route path='/usermanage' element={ <AdminUserManagement /> } />  {/* 유저관리 */}
                    <Route path='/bookmanage' element={ <AdminBookManagement /> } />  {/* 유저관리 */}
                    <Route path='/loanmanage' element={<AdminLoanManagement />} /> {/* 대출 반납 관리 */}
                    <Route path='/boardWrite' element={ <NoticeBoardWritePage /> } />
                    <Route path='/boardDetail/:noticeBoardId' element={ <BoardDetailPage /> } />
                    <Route path='/boardDetail/edit/:noticeBoardId' element={ <BoardModifyPage /> } />
                </Routes>
                <AdminSideBar />
                </>
            }
        </>
    );
}

export default AdminRoute;