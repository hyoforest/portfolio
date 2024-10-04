import React from "react"; 


function TopBtn({onDotClick}){
    const tobBtnStyle = {
        width: 60,
        height: 60,
        border: "1px solid black",
        background:"red",
        borderRadius: "50%",
        cursor: "pointer",
        position:"absolute",
        bottom:60,
        right:60,
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