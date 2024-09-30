import React,{useRef} from "react";
import Header from "./html/Header";
import Main from "./html/Main";
import Footer from "./html/Footer";

function Content(){
    const scrollRef = useRef([]);
    const handleScrollView = (event) => {
        const name = event.target.innerText;
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
            <Header onNavigate={handleScrollView}/>
            <Main scrollRef={scrollRef}/>
            {/* <Footer/> */}
        </div>
    )
}

export default Content;            