import React from 'react';

const Dot = ({ num,currentPage,onClick }) => {
    const isActive = currentPage + 1 === num;
    const dotStyle = {
        width: 10,
        height: 10,
        border: "1px solid black",
        borderRadius: "50%",
        backgroundColor: isActive ? "black" : "transparent",
        transition: "background-color 0.5s",
        cursor: "pointer"
    };

    return <div style={dotStyle} onClick={onClick}></div>;
};

const Dots = ({ currentPage, dotCount,onDotClick }) => {
    const dots = Array.from({ length: dotCount }, (_, index) => (
        <Dot key={index + 1}
        num={index + 1}
        currentPage={currentPage}
        onClick={() => onDotClick(index)} 
        />
    ));

    const containerStyle = {
        position: "fixed",
        top: "50%",
        right: 60,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        width: 20,
        height: 100,
    };

    return <div style={containerStyle} className="dots">{dots}</div>;
};

export default Dots;
