import React,{useRef,useEffect,useState} from "react";
import Title from '../Title';
import Intro from '../Intro';
import Work from '../Work';
import Contact from '../Contact';
import Dots from "./Dots";

const DIVIDER_HEIGHT = 5;
function Main({scrollRef}){
    const outerDivRef = useRef();
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const wheelHandler = (e) => {
            e.preventDefault();
            const { deltaY } = e;
            const { scrollTop } = outerDivRef.current; // 스크롤 위쪽 끝부분 위치
            const pageHeight = window.innerHeight; // 화면 세로길이, 100vh
            if (deltaY > 0){
                // 스크롤 내릴 때
                if (scrollTop >= 0 && scrollTop < pageHeight) {
                  //현재 1페이지
                    console.log("현재 1페이지, down");
                    outerDivRef.current.scrollTo({
                        top: pageHeight + DIVIDER_HEIGHT,
                        left: 0,
                        behavior: "smooth",
                        });
                        setCurrentPage(2);
                } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
                  //현재 2페이지
                    console.log("현재 2페이지, down");
                    outerDivRef.current.scrollTo({
                        top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
                        left: 0,
                        behavior: "smooth",
                        });
                        setCurrentPage(3);
                }else if (scrollTop >= pageHeight && scrollTop < pageHeight * 3) {
                    //현재 3페이지
                    console.log("현재 3페이지, down");
                    outerDivRef.current.scrollTo({
                        top: pageHeight * 3 + DIVIDER_HEIGHT *3,
                        left: 0,
                        behavior: "smooth",
                        });
                        setCurrentPage(4);
                }else {
                  // 현재 4페이지
                    console.log("현재 4페이지, down");
                    outerDivRef.current.scrollTo({
                        top: pageHeight * 3 + DIVIDER_HEIGHT *3,
                        left: 0,
                        behavior: "smooth",
                        });
                }
            } else {
                // 스크롤 올릴 때
                if (scrollTop >= 0 && scrollTop < pageHeight) {
                  //현재 1페이지
                    console.log("현재 1페이지, up");
                    outerDivRef.current.scrollTo({
                        top: 0,
                        left: 0,
                        behavior: "smooth",
                        });
                } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
                  //현재 2페이지
                    console.log("현재 2페이지, up");
                    outerDivRef.current.scrollTo({
                        top: 0,
                        left: 0,
                        behavior: "smooth",
                        });
                        setCurrentPage(1);
                }
                else if(scrollTop >= pageHeight && scrollTop < pageHeight*3){
                    //현재 3페이지
                    console.log("현재 3페이지, up");
                    outerDivRef.current.scrollTo({
                        top: pageHeight + DIVIDER_HEIGHT,
                        left: 0,
                        behavior: "smooth",
                        });
                        setCurrentPage(2);
                }else{
                  // 현재 4페이지
                    console.log("현재 4페이지, up");
                    outerDivRef.current.scrollTo({
                        top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
                        left: 0,
                        behavior: "smooth",
                        });
                        setCurrentPage(3);
                }
            }
            };
        const outerDivRefCurrent = outerDivRef.current;
        outerDivRefCurrent.addEventListener("wheel", wheelHandler);
        return () => {
        outerDivRefCurrent.removeEventListener("wheel", wheelHandler);
    };
    }, []);
    return(
        <main id="main" className="main">
            <div class="outer" ref={outerDivRef}>
            <Dots currentPage={currentPage} />
                <div className="inner"
                ref={(el) => (scrollRef.current[0] = el)}
                >
                <Title/>
                </div>
                <div className="divider"></div>
                <div className="inner"
                ref={(el) => (scrollRef.current[1] = el)}
                >
                <Intro/>
                </div>
                <div className="divider"></div>
                <div className="inner"
                ref={(el) => (scrollRef.current[2] = el)}
                >
                <Work/>
                </div>
                <div className="divider"></div>
                <div className="inner"
                ref={(el) => (scrollRef.current[3] = el)}
                >
                <Contact/>
                </div>
            </div>
        </main>
    )
}

export default Main;