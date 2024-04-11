/** @jsxImportSource @emotion/react */
import * as s from "./style"
import { Link, Route, Routes } from "react-router-dom";

import Mypage from "../Mypage/Mypage";
import Header from "../../components/Header/Header";

function Home(props) {
    return (
        <>
            <Header />
            <Link to={"/mypage"} /> 
            <Routes>
                <Route path="/mypage/*" element={<Mypage />} />
            </Routes>
        </>
    );
}

export default Home;