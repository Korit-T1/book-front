/** @jsxImportSource @emotion/react */
import * as s from "./style"
import Mypage from "../Mypage/Mypage";
import BookInfoPage from "../BookInfoPage/BookInfoPage";
import MainPage from "../MainPage/MainPage";

function Home(props) {
    return (
        <div css={s.layout}>
            <h1>메인</h1>
            {/* <>
                <Routes>
                    <Route path="/*" element={<MainPage /> } />
                    <Route path="/mypage/*" element={<Mypage />} />
                    <Route path="/books" element={<BookInfoPage /> } />
                </Routes>
            </> */}
        </div>
    );
}

export default Home;