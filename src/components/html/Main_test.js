import React,{useRef,useEffect,useState} from "react";
import Title from '../Title';
import Intro from '../Intro';
import Work from '../Work';
import Contact from '../Contact';
import Dots from "./Dots";

const DIVIDER_HEIGHT = 5;
const pageName = [<Title />, <Intro />, <Work />, <Contact />];

function Main({scrollRef}){
    const outerDivRef = useRef();
    const [currentPage, setCurrentPage] = useState(0);

    const handleScroll =(scrollDirection)=>{
        const pageHeight = window.innerHeight;
        const maxPage = pageName.length - 1;

        let newPage = currentPage + scrollDirection;
        newPage = Math.max(0, Math.min(newPage, maxPage));

        if (newPage !== currentPage) {
            outerDivRef.current.scrollTo({
                top: newPage * (pageHeight + DIVIDER_HEIGHT),
                left: 0,
                behavior: "smooth",
            });
            setCurrentPage(newPage-1);
        }
    }

    useEffect(() => {
        const wheelHandler = (e) => {
            e.preventDefault();
            const { deltaY } = e;
            handleScroll(deltaY > 0 ? 1 : -1);
        };

        const outerDivRefCurrent = outerDivRef.current;
        outerDivRefCurrent.addEventListener("wheel", wheelHandler);
        return () => {
            outerDivRefCurrent.removeEventListener("wheel", wheelHandler);
        };
    }, [currentPage]);

    return (
        <main id="main" className="main">
            <div className="outer" ref={outerDivRef}>
                <Dots currentPage={currentPage} />
                {pageName.map((PageComponent, index) => (
                    <div key={index}>
                        <div className="inner" ref={(el) => (scrollRef.current[index] = el)}>
                            {PageComponent}
                        </div>
                        {index < pageName.length - 1 && <div className="divider"></div>}
                    </div>
                ))}
            </div>
        </main>
    )
}

export default Main;

import React from 'react';

const DOT_COUNT = 4; // 점의 개수

const Dot = ({ num, currentPage }) => {
    const isActive = currentPage === num;
    const dotStyle = {
        width: 10,
        height: 10,
        border: "1px solid black",
        borderRadius: "50%",
        backgroundColor: isActive ? "black" : "transparent",
        transition: "background-color 0.5s",
    };

    return <div style={dotStyle}></div>;
};

const Dots = ({ currentPage }) => {
    const dots = Array.from({ length: DOT_COUNT }, (_, index) => (
        <Dot key={index + 1} num={index + 1} currentPage={currentPage} />
    ));

    const containerStyle = {
        position: "fixed",
        top: "50%",
        right: 100,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        width: 20,
        height: 100,
    };

    return <div style={containerStyle}>{dots}</div>;
};

export default Dots;


import React, { useRef, useEffect, useState } from "react";
import Title from '../Title';
import Intro from '../Intro';
import Work from '../Work';
import Contact from '../Contact';
import Dots from "./Dots";

const DIVIDER_HEIGHT = 5;

// 컴포넌트 목록을 배열로 정의
const COMPONENTS = [
    Title,
    Intro,
    Work,
    Contact,
];

function Main({ scrollRef }) {
    const outerDivRef = useRef();
    const [currentPage, setCurrentPage] = useState(0); // 인덱스 기준으로 시작

    const handleScroll = (delta) => {
        const pageHeight = window.innerHeight; // 각 페이지의 높이
        const maxPage = COMPONENTS.length - 1;

        let newPage = currentPage + delta;
        newPage = Math.max(0, Math.min(newPage, maxPage)); // 0과 maxPage 사이로 제한

        if (newPage !== currentPage) {
            outerDivRef.current.scrollTo({
                top: newPage * (pageHeight + DIVIDER_HEIGHT),
                left: 0,
                behavior: "smooth",
            });
            setCurrentPage(newPage);
        }
    };

    useEffect(() => {
        const wheelHandler = (e) => {
            e.preventDefault();
            const { deltaY } = e;
            handleScroll(deltaY > 0 ? 1 : -1);
        };

        const outerDivRefCurrent = outerDivRef.current;
        outerDivRefCurrent.addEventListener("wheel", wheelHandler);
        return () => {
            outerDivRefCurrent.removeEventListener("wheel", wheelHandler);
        };
    }, [currentPage]);

    return (
        <main id="main" className="main">
            <div className="outer" ref={outerDivRef}>
                <Dots currentPage={currentPage} />
                {COMPONENTS.map((Component, index) => (
                    <div key={index}>
                        <div className="inner" ref={(el) => (scrollRef.current[index] = el)}>
                            <Component /> {/* 컴포넌트를 렌더링 */}
                        </div>
                        {index < COMPONENTS.length - 1 && <div className="divider"></div>}
                    </div>
                ))}
            </div>
        </main>
    );
}

export default Main;


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