/** @jsxImportSource @emotion/react */
import * as s from "./style"
import { useRef, useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { updateProfileImageRequest } from '../../apis/api/mypage';
import { Link } from 'react-router-dom';
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage"
import { v4 as uuid } from "uuid"
import { storage } from "../../apis/firebase/firebaseConfig"
import { SIDE_MENU } from "../../constants/mypageSideMenu";
import { GiWhiteBook } from "react-icons/gi";


function MypageSideMenu() {
    const imgFileRef = useRef(); 
    const queryClient = useQueryClient();
    const principalData = queryClient.getQueryData("principalQuery");

    const [ activeMenu, setActiveMenu ] = useState(1);

    const handleMenuClick = (menuID) => {
        if(menuID !== activeMenu) {
            setActiveMenu(menuID);
        }
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
            <div css={s.menuBox(activeMenu)}>
                {
                    SIDE_MENU.map(menu => 
                        <div css={s.menus} key={menu.id}>
                            <Link 
                                css={s.menu} 
                                to={menu.path}
                                onClick={() => handleMenuClick(menu.id)}>
                                {menu.id === 1 ? <GiWhiteBook size={35}/> : menu.name}
                            </Link>
                        </div>  
                    )
                }
            </div>
        </>
    );
}

export default MypageSideMenu;