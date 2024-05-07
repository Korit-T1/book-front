import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminSigninPage from '../pages/Admin/AdminSigninPage/AdminSigninPage';
import AdminMainPage from '../pages/Admin/AdminMainPage/AdminMainPage';
import AdminUserManagement from '../pages/Admin/AdminUserManagement/AdminUserManagement';
import AdminNoticemanagement from '../pages/Admin/AdminNoticemanagement/AdminNoticemanagement';
import AdminFreeBoardManagemet from '../pages/Admin/AdminFreeBoardManagemet/AdminFreeBoardManagemet';
import AdminEventManagement from '../pages/Admin/AdminEventManagement/AdminEventManagement';
import AdminPreferenceManagement from '../pages/Admin/AdminPreferenceManagement/AdminPreferenceManagement';
import AdminSideBar from '../pages/Admin/AdminSideBar/AdminSideBar';
import AdminBookManagement from '../pages/Admin/AdminBookManagement/AdminBookManagement';
import AdminBookRegisterInput from '../pages/Admin/AdminBookRegisterInput/AdminBookRegisterInput';
import { useState } from "react";
import { getAdminPrincipalRequest } from "../../src/apis/api/principal";
import { useQuery } from "react-query";
import NoticeBoardWritePage from '../pages/NoticeBoardWritePage/NoticeBoardWritePage';


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
                    <Route path='/bookmanage' element={ <AdminBookManagement /> } /> {/* 도서관리 */}
                    <Route path='/usermanage' element={ <AdminUserManagement /> } />  {/* 유저관리 */}
                    <Route path='/noticemanage' element={ <AdminNoticemanagement /> } /> {/* 공지사항관리 */}
                    <Route path='/freeboardmanage' element={ <AdminFreeBoardManagemet /> } />   {/* 자유게시판관리 */}
                    <Route path='/eventmanage' element={ <AdminEventManagement /> } />   {/* 이벤트관리 */}
                    <Route path='/preference' element={ <AdminPreferenceManagement /> } />    {/* 환경설정 */}
                    <Route path='/bookregister' element={ <AdminBookRegisterInput /> } />    {/* 책 등록 */}
                    <Route path='/boardWrite' element={ <NoticeBoardWritePage /> } />
                </Routes>
                <AdminSideBar />
                </>
            }
        </>
    );
}

export default AdminRoute;