import React,{useRef} from "react";
import Header from "./html/Header";
import Main from "./html/Main";

function Content(){
    const scrollRef = useRef([]);
    const navScroll = (event) => {
        const name = event.target.innerText;
        // redux 사용해야 함
        const category = {
            Title: 0,
            Intro: 1,
            Work: 2,
            Contact: 3
        };
        scrollRef.current[category[name]].scrollIntoView({ behavior: "smooth" });
    };
    return(
        <div className="Content">
            <Header onNavigate={navScroll}/>
            <Main scrollRef={scrollRef}/>
        </div>
    )
}

export default Content;            