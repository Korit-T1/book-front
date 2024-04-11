/** @jsxImportSource @emotion/react */
import * as s from "./style";

function MainPage(props) {


    return (
        <>
    
            <div css={s.layout}>
                <div css={s.container}>
                    <div css={s.bookContainer}>
                        <div css={s.bookInfo}>
                            <a href="">
                                <img src="" alt="" />
                            </a>
                        </div>
                        <div css={s.bookInfo}>
                            <a href="">
                                <img src="" alt="" />
                            </a>
                        </div>
                    </div> 
                    <div css={s.bookContainer}>

                    </div>
                </div>
            </div>
        </>
        );
}

export default MainPage;