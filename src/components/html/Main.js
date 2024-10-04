import React,{useRef,useEffect,useState} from "react";
import Title from '../Title';
import Intro from '../Intro';
import Work from '../Work';
import Contact from '../Contact';
import Dots from "./Dots";
import TopBtn from "../html/TopBtn";

const DIVIDER_HEIGHT = 5;

// redux로 옮기기
//컴포넌트 추가 시 배열에도 추가
const Components = [Title,Intro,Work,Contact]

function Main({scrollRef}){
    const outerDivRef = useRef();
    const touchStartRef = useRef(0);
    const isScrollingRef = useRef(false);
    const [currentPage, setCurrentPage] = useState(0);

    const navDotClick = (index) => {
        setCurrentPage(index);
        
        const pageHeight = window.innerHeight;
        outerDivRef.current.scrollTo({
            top: index * (pageHeight + DIVIDER_HEIGHT),
            left: 0,
            behavior: "smooth",
    })
}

    useEffect(() => {
        const handleScroll =(scrollDirection)=>{
            const pageHeight = window.innerHeight;
            const maxPage = Components.length-1;
            let newPage = currentPage + scrollDirection
            newPage = Math.max(0, Math.min(newPage,maxPage))
            
            if(newPage !== currentPage){
                outerDivRef.current.scrollTo(
                    {top:newPage *(pageHeight + DIVIDER_HEIGHT),
                    left:0,
                    behavior :"smooth"
                    })
                    setCurrentPage(newPage);
            }
        }

        const wheelHandler = (e) => {
            e.preventDefault();
            if (!isScrollingRef.current) {
                const { deltaY } = e;
                isScrollingRef.current = true;
                handleScroll(deltaY > 0 ? 1 : -1);
                
                setTimeout(() => {
                    isScrollingRef.current = false;
                }, 500);
            }
        };
        const touchStartHandler = (e) => {
            touchStartRef.current = e.touches[0].clientY;
        };

        const touchMoveHandler = (e) => {
            const touchDiff = touchStartRef.current - e.touches[0].clientY;
            if (Math.abs(touchDiff) > 30) {
                e.preventDefault();
                if (!isScrollingRef.current) {
                    isScrollingRef.current = true;
                    handleScroll(touchDiff > 0 ? 1 : -1);

                    setTimeout(() => {
                        isScrollingRef.current = false;
                    }, 1000);
                }
            }
        };

        const outerDivRefCurrent = outerDivRef.current;
        outerDivRefCurrent.addEventListener("wheel", wheelHandler);
        outerDivRefCurrent.addEventListener("touchstart", touchStartHandler);
        outerDivRefCurrent.addEventListener("touchmove", touchMoveHandler, { passive: false });

        return () => {
            outerDivRefCurrent.removeEventListener("wheel", wheelHandler);
            outerDivRefCurrent.removeEventListener("touchstart", touchStartHandler);
            outerDivRefCurrent.removeEventListener("touchmove", touchMoveHandler);
        };
    }, [currentPage]);
    return(
        <main id="main" className="main">
            <div className="outer" ref={outerDivRef}>
                <Dots currentPage={currentPage} dotCount={Components.length} onDotClick={navDotClick}/>
                {Components.map((Component, index) => (
                    <div key={index}>
                        <div className="inner" ref={(el) => (scrollRef.current[index] = el)}>
                            <Component />
                        </div>
                        {index < Components.length - 1 && <div className="divider"></div>}
                    </div>
                ))}
            </div>
            <TopBtn onDotClick={navDotClick} />
        </main>
    )
}

export default Main;