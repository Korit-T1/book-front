/** @jsxImportSource @emotion/react */
import * as s from "./style"
import { Link, Route, Routes } from "react-router-dom";
import { useQuery } from "react-query"
import Mypage from "../Mypage/Mypage";
import Header from "../../components/Header/Header";
import { getPrincipalRequest } from "../../apis/api/principal";
import SignupPage from "../SignupPage/SignupPage";
import BookInfoPage from "../BookInfoPage/BookInfoPage";
import SigninPage from "../SigninPage/SigninPage";
import MainPage from "../MainPage/MainPage";

function Home(props) {
    const principalQuery = useQuery(["principalQuery"], getPrincipalRequest,
    {
        retry: 0,
        refetchOnWindowFocus: false,
        onSuccess: response => {
            console.log("success");
        },
        onError: error => {
            console.log("error");
        }
    });

    return (
        <div css={s.layout}>
            <Header />
            <Link to={"/mypage"} /> 
            <Routes>
                <Route path="/" element={<MainPage /> } />
                <Route path="/mypage/*" element={<Mypage />} />
                <Route path="/signup" element={<SignupPage /> } />
                <Route path="/signin" element={<SigninPage /> } />
                <Route path="/books" element={<BookInfoPage /> } />
            </Routes>
        </div>
    );
}

export default Home;