import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import BookSearchPage from '../pages/BookSearchPage/BookSearchPage';
import MainContainer from '../components/MainContainer/MainContainer';
import SearchHeader from '../components/SearchHeader/SearchHeader';
import { useQuery } from 'react-query';
import { getPrincipalRequest } from '../apis/api/principal';
import Mypage from '../pages/Mypage/Mypage';
import { useRecoilState } from 'recoil';
import { principalState } from '../atoms/principalAtom';

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
                        <Route path='/' element={ <Home /> } />
                        <Route path='/search' element={ <BookSearchPage /> } />
                        <Route path='/mypage/*' element={ <Mypage/>} />
                    </Routes>
                </MainContainer>
            </>
        }
        </>
    );
}

export default MainRoute;