import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import MainContainer from '../components/MainContainer/MainContainer';
import SearchHeader from '../components/SearchHeader/SearchHeader';
import { useQuery } from 'react-query';
import { getPrincipalRequest } from '../apis/api/principal';
import Mypage from '../pages/Mypage/Mypage';
import { useRecoilState } from 'recoil';
import { principalState } from '../atoms/principalAtom';
import BookSearchPage from '../../src/pages/BookSearchPage/BookSearchPage';
import BoardListPage from '../pages/BoardListPage/BoardListPage';
import BoardDetailPage from '../pages/BoardDetailPage/BoardDetailPage';
import BoardModifyPage from '../pages/BoardModifyPage/BoardModifyPage';
import FindPasswordPage from '../pages/FindPasswordPage/FindPasswordPage';
import SearchUsernamePage from '../pages/SearchUsernamePage/SearchUsernamePage';


function MainRoute() {
    const [ principal, setPrincipal ] = useRecoilState(principalState);
  
    const principalQuery = useQuery(
        ["principalQuery"], getPrincipalRequest,
        {
            retry: 0,
            refetchOnWindowFocus: false,
            onSuccess: response => {
                if(!!response){
                    setPrincipal(() => response.data);
                } else {

                }
            },
            onError: error => {
                console.log("비회원");
            }
        }
    );
   
    return (
        <>
            {principalQuery.isLoading 
                ? <></> 
                : 
                <>
                    <SearchHeader />
                    <MainContainer>
                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path='/mypage/*' element={<Mypage />} />
                            <Route path='/search' element={<BookSearchPage />} />
                            <Route path='/searchUserInfo/findPw' element={<FindPasswordPage />} />
                            <Route path='/searchUserInfo/findId' element={<SearchUsernamePage />} />
                            <Route path='/boardList' element={<BoardListPage />} />
                            <Route path='/boardDetail/:noticeBoardId' element={<BoardDetailPage />} />
                            <Route path='/boardDetail/edit/:noticeBoardId' element={<BoardModifyPage />} />
                        </Routes>
                    </MainContainer>
                </>
            }
        </>
    );
}

export default MainRoute;
