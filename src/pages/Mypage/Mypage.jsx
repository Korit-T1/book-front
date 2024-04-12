/** @jsxImportSource @emotion/react */
import * as s from "./style"
import { Link } from "react-router-dom";
import { MENUS } from "../../constants/mypageMenu";
import { Route, Routes } from "react-router-dom";
import UserInfoModification from "../UserInfoModification/UserInfoModification";
import WishList from "../WishList/WishList";
import LoanAndReturn from "../LoanAndReturn/LoanAndReturn";
import Overdue from "../Overdue/Overdue";
import MypageMain from "../MypageMain/MypageMain";
import { useAuthCheck } from "../../hooks/useAuthCheck";
import { useQueryClient } from "react-query";

function Mypage() {
    useAuthCheck();
    const queryClient = useQueryClient();
    const principalData = queryClient.getQueryData("principalQuery");
    const data = principalData?.data;
    console.log("Mypage:" + data.username);
    return (
        <>
            <div css={s.bodyLayout}>
                <div css={s.left}>
                    <div css={s.profile}>
                        <div css={s.imageBox}>
                            <div css={s.image}>
                                
                            </div>
                        </div>  
                        <div css={s.bottomBox}>
                            <h3>안녕하세요. {principalData?.data.name}님</h3>
                        </div>
                    </div>
                    <div css={s.sideMenu}>
                        {
                            MENUS.map(menu =>
                                <Link css={s.menuItem} to={menu.path} key={menu.id}>
                                    <p>{menu.name}</p>
                                </Link>
                            )
                        }
                    </div>
                </div>
                <div css={s.right}>
                    <Routes>
                        <Route path="/" element={ <MypageMain />}/>
                        <Route path="/info" element={ < UserInfoModification data={data}/> }/>
                        <Route path="/wishlist" element={ < WishList data={data}/> }/>
                        <Route path="/loan" element={ < LoanAndReturn data={data}/> }/>
                        <Route path="/overdue" element={ < Overdue/> }/>
                    </Routes>
                </div>
            </div>
        </>    
    );
}

export default Mypage;
