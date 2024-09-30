import React from "react";
import Nav from './Nav'
function Header({onNavigate}){
    return(
    <header id="header" className="header">
        <h1>로고</h1>
        <Nav onNavigate={onNavigate} />
    </header>
    )
}

export default Header;