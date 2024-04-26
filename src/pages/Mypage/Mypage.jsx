/** @jsxImportSource @emotion/react */
import * as s from "./style"
import { Route, Routes } from "react-router-dom";
import UserInfoModification from "../UserInfoModification/UserInfoModification";
import WishList from "../WishList/WishList";
import MypageSideMenu from "../../components/MypageSideMenu/MypageSideMenu";
import { useQueryClient } from "react-query";
import MypageMain from "../MypageMain/MypageMain";
import ReturnedBookList from "../ReturnedBookList/ReturnedBookList";
import ReadingBookList from "../ReadingBookList/ReadingBookList";

function Mypage() {
    const queryClient = useQueryClient();
    const principalData = queryClient.getQueryData("principalQuery");
    
    return (
        <>
            <div css={s.back}></div>
            <div css={s.bodyLayout}>
                <div css={s.body}>
                    <div css={s.left}>
                        <MypageSideMenu />
                    </div>
                    <div css={s.right}>
                        <Routes>
                            <Route path='/' element={ <MypageMain data={principalData} /> } />
                            <Route path='/password'element={ <UserInfoModification data={principalData} /> } />
                            <Route path='/reading' element={ <ReadingBookList data={principalData} /> } />
                            <Route path='/returned' element={ <ReturnedBookList data={principalData} /> } />
                            <Route path='/wish' element={ <WishList data={principalData} /> } />
                        </Routes>
                    </div>
                </div>
            </div>
        </>    
    );
}

export default Mypage;
