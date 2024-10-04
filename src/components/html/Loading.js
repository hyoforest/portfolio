import React from "react";
import Opening from "./Opening";



function Loading({onSkip}){
    const btnStyle ={
        color:"#fff",
        fontSize:"12px",
        position:"absolute",
        bottom:"20%",
        left:"50%",
        transform:"translateX(-50%)",
        cursor:"pointer"
    }
    return(
        <div className="loading">
            <button style ={btnStyle} onClick={onSkip}>SKIP</button>
            <Opening/>
        </div>
    )
}

export default Loading;