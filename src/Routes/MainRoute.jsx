import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import BookSearchPage from '../pages/BookSearchPage/BookSearchPage';
import MainContainer from '../components/MainContainer/MainContainer';
import SearchHeader from '../components/SearchHeader/SearchHeader';
import SigninPage from '../pages/SigninPage/SigninPage';



function MainRoute(props) {
    return (
        <>
            <SearchHeader />
            <MainContainer>
                <Routes>
                    <Route path='/' element={<Home /> } />
                    <Route path='/search' element={ <BookSearchPage /> } />
                    <Route path='/auth/signin' element={ <SigninPage /> } />
                </Routes>
            </MainContainer>
        </>
    );
}

export default MainRoute;