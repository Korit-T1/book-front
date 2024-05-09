/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import * as s from "./style"
import { SLIDE } from "../../constants/slide"
import { RiArrowLeftSLine, RiArrowRightSLine  } from "react-icons/ri";




function ImageSilder() {
    const [ slides, setSlides ] = useState(SLIDE);
    const [ curSlide, setCurSlide ] = useState(0);
    const [ intervalId, setIntervalId ] = useState(null);

    const FIRST_SLIDE_INDEX = 0; // 이미지 슬라이드의 시작 번호
    const LAST_SLIDE_INDEX = slides.length - 1; // 이미지 슬라이드의 끝 번호
    const MOVE_SLIDE_INDEX = 1; // 이미지 슬라이드 이동 값

    const moveToSlide = (value) => {
        if (value === 'next') {
          // 슬라이드 끝점에 도달했을 때 curSlide의 값을 바꿔 처음으로 돌아가게 한다.
          setCurSlide((prevState) =>
            prevState < LAST_SLIDE_INDEX
              ? prevState + MOVE_SLIDE_INDEX
              : FIRST_SLIDE_INDEX
          );
        }
        if (value === 'prev') {
          // 슬라이드 시작점에 도달했을 때 curSlide의 값을 바꿔 마지막으로 돌아가게 한다.
          setCurSlide((prevState) =>
            prevState > FIRST_SLIDE_INDEX
              ? prevState - MOVE_SLIDE_INDEX
              : LAST_SLIDE_INDEX
          );
        }
    };

    const autoMoveSlide = () => {
        if (intervalId !== null) {
          clearInterval(intervalId);
        }
    
        setIntervalId(
          setInterval(() => {
            setCurSlide((prevState) =>
              prevState < LAST_SLIDE_INDEX
                ? prevState + MOVE_SLIDE_INDEX
                : FIRST_SLIDE_INDEX
            );
          }, 5000)
        );
      };
    
      useEffect(() => {
        autoMoveSlide();
    
        return () => clearInterval(intervalId);
      }, []);

    return (
        <>
            <div css={s.show}>
                <button css={s.prev} onClick={() => moveToSlide('prev')}>
                    <RiArrowLeftSLine />
                </button>
                {
                    slides.map((item, index) => (
                        <div css={s.compartment(curSlide)} key={index}>
                            <h1 dangerouslySetInnerHTML={{__html: item.name}}></h1>
                            {/* <div css={s.sss}>
                                <img src={item.icon} alt="" />
                            </div> */}
                            <img src={item.url} alt="" />
                        </div>
                    ))
                }
                <button css={s.next} onClick={() => moveToSlide('next')}>
                    <RiArrowRightSLine />
                </button>
            </div>
        </>
    );
}

export default ImageSilder;