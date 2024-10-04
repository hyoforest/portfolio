import React from "react";
import Nav from './Nav'

function Header({onNavigate}){
    const reload = ()=>{window.location.reload(true);}

    return(
    <header id="header" className="header">
        <h1 onClick={reload}>로고</h1>
        <Nav onNavigate={onNavigate} />
    </header>
    )
}

export default Header;