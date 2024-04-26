/** @jsxImportSource @emotion/react */
import * as s from "./style"
import React, { useRef, useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { updateProfileImageRequest } from '../../apis/api/mypage';
import { Link } from 'react-router-dom';
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage"
import { v4 as uuid } from "uuid"
import { storage } from "../../apis/firebase/firebaseConfig"

function MypageSideMenu() {
    const imgFileRef = useRef(); 
    const queryClient = useQueryClient();
    const principalData = queryClient.getQueryData("principalQuery");
    const linkref = useRef();

    const [ activeMenu, setActiveMenu ] = useState(null);

    const handleMenuClick = (menuName) => {
        setActiveMenu(menuName === activeMenu ? null : menuName);
    };

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
                    <Link css={s.menu} to={"/mypage/password"}>
                        비밀번호 변경
                    </Link>
                </div>
                <div css={s.menus}>
                <Link css={s.menu} to={"/mypage/reading?page=1&option=0"}>
                        대출 중인 도서
                    </Link>
                </div>
                <div css={s.menus}>
                    <Link css={s.menu} to={"/mypage/returned?page=1&option=0"}>
                        반납한 도서
                    </Link>
                </div>
                <div css={s.menus}>
                    <Link css={s.menu} to={"/mypage/wish?page=1&option=0"}>
                        위시리스트
                    </Link>
                </div>
            </div>
        </>
    );
}

export default MypageSideMenu;

{/* <div css={s.menus(activeMenu === 'a')} onClick={() => {
                    linkref.current.click(); 
                    handleMenuClick('a')
                }}>
                    <Link
                        css={s.menu(activeMenu === 'a')}
                        to={"/mypage/password"}
                        ref={linkref}
                    >비밀번호 변경</Link>
                </div>

                <div css={s.menus(activeMenu === 'b')} onClick={() => {
                    linkref.current.click(); 
                    handleMenuClick('b')
                }}>
                    <Link 
                        css={s.menu(activeMenu === 'b')}
                        to={"/mypage/history"}
                    >대출 도서</Link>
                </div>

                <div css={s.menus(activeMenu === 'c')} onClick={() => {
                    linkref.current.click();
                    handleMenuClick('c');
                }}>
                    <Link
                        css={s.menu(activeMenu === 'c')}
                        to={"/mypage/return"}
                        ref={linkref}
                    >반납 도서</Link>
                </div>

                {/* <div css={s.menus(activeMenu === 'd')} onClick={() => {
                    linkref.current.click();    
                    handleMenuClick('d');
                }}>
                    </div> */}