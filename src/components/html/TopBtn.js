import React from "react"; 


function TopBtn({onDotClick}){
    const tobBtnStyle = {
        width: 60,
        height: 60,
        border: "1px solid black",
        background:"#000",
        color:"#fff",
        borderRadius: "50%",
        cursor: "pointer",
        position:"absolute",
        bottom:40,
        right:40,
    };

    return(
        <button
        className="top_btn"
        style={tobBtnStyle}
        onClick={() => onDotClick(0)} 
        >
        TOP
        </button>
    )
}
export default TopBtn;