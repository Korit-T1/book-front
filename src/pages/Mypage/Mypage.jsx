/** @jsxImportSource @emotion/react */
import * as s from "./style"
import { Link } from "react-router-dom";
import { MENUS } from "../../constants/mypageMenu";
import { Route, Routes } from "react-router-dom";
import UserInfoModification from "../UserInfoModification/UserInfoModification";
import WishList from "../WishList/WishList";
import LoanAndReturn from "../LoanAndReturn/LoanAndReturn";
import LoanAndReturn2 from "../LoanAndReturn/LoanAndReturn2";
import Overdue from "../Overdue/Overdue";
import MypageMain from "../MypageMain/MypageMain";
import { useAuthCheck } from "../../hooks/useAuthCheck";
import { useMutation, useQueryClient } from "react-query";
import { useEffect, useRef, useState } from "react";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage"
import { v4 as uuid } from "uuid"
import { storage } from "../../apis/firebase/firebaseConfig"
import { updateProfileImageRequest } from "../../apis/api/mypage";

function Mypage() {
    const imgFileRef = useRef(); 
    const queryClient = useQueryClient();
    const principalData = queryClient.getQueryData("principalQuery");

    const updateProfileImageMutation = useMutation({
        mutationKey: "updateProfileImageMutation",
        mutationFn: updateProfileImageRequest,
        retry: 0,
        onSuccess: (response) => {
            queryClient.refetchQueries(["principalQuery"]);
            console.log("이미지 업데이트 성공")
        }
    });

    const handleImgFileChange = (e) => {
        if(e.target.files.length === 0) {
            imgFileRef.current.value = "";
            return;
        }

        if(!window.confirm("사진을 등록하시겠습니까?")) {
            return; 
        }

        const file = e.target.files[0];
        console.log(file);
        const storageRef = ref(storage, `user/profileImage/${uuid()}_${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
            'state_changed',
            (snapshot) => {},
            (error) => {},
            () => {
                getDownloadURL(storageRef).then(url => {
                    console.log("firebase 등록 완료");
                    updateProfileImageMutation.mutate({
                        userid: principalData.data.userId, 
                        imageUrl: url
                    }
                );
            })
        })

    }

    return (
        <>
            <div css={s.back}></div>
            <div css={s.bodyLayout}>
                <div css={s.body}>
                    <div css={s.left}>
                        <div css={s.profile}>
                            <div css={s.image} onClick={() => imgFileRef.current.click()}>
                                <img src={principalData.data.profileUrl} alt="" />
                                <input style={{display: "none"}} ref={imgFileRef} type="file" onChange={handleImgFileChange}></input> 
                            </div>
                            <div css={s.role}>
                                {principalData.data.name} 님
                            </div>
                        </div>
                        <div css={s.menuBox}>
                            <div css={s.menus}>
                                <Link css={s.menu}>비밀번호 변경</Link>
                            </div>
                            <div css={s.menus}>
                                <Link css={s.menu} to={"/mypage/history"}>대출 및 반납</Link>
                            </div>
                            <div css={s.menus}>
                                <Link css={s.menu}>위시리스트</Link>
                            </div>
                        </div>
                    </div>
                    <div css={s.right}>
                        <Routes>
                            <Route path='/history' element={ <LoanAndReturn2 data={principalData} /> } />
                        </Routes>
                    </div>
                </div>
            </div>
        </>    
    );
}
                // <div css={s.left}>
                //     <div css={s.profile}>
                //         <div css={s.imageBox}>
                //             <div css={s.image}>
                                
                //             </div>
                //         </div>  
                //         <div css={s.bottomBox}>
                //             {/* <h3>안녕하세요. {principalData?.data.name}님</h3> */}
                //         </div>
                //     </div>
                //     <div css={s.sideMenu}>
                //         {
                //             MENUS.map(menu =>
                //                 <Link css={s.menuItem} to={menu.path} key={menu.id}>
                //                     <p>{menu.name}</p>
                //                 </Link>
                //             )
                //         }
                //     </div>
                // </div>
                // <div css={s.right}>
                //     <Routes>
                //         {/* <Route path="/" element={ <MypageMain />}/>
                //         <Route path="/info" element={ < UserInfoModification data={data}/> }/>
                //         <Route path="/wishlist" element={ < WishList data={data}/> }/>
                //         <Route path="/loan" element={ < LoanAndReturn data={data}/> }/>
                //         <Route path="/overdue" element={ < Overdue/> }/> */}
                //     </Routes>
                // </div>

export default Mypage;
