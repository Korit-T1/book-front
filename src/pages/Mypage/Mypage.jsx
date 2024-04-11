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

function Mypage() {
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
                            <h1>기타</h1>
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
                        <Route path="/info" element={ < UserInfoModification/> }/>
                        <Route path="/wishlist" element={ < WishList/> }/>
                        <Route path="/loan" element={ < LoanAndReturn/> }/>
                        <Route path="/overdue" element={ < Overdue/> }/>
                    </Routes>
                </div>
            </div>
        </>    
    );
}

export default Mypage;
