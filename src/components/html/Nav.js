import React from "react";

function Nav({onNavigate}){
    const pages = ['Title', 'Intro', 'Work', 'Contact'];
    return(
        <nav id="nav" className="nav" onClick={onNavigate}>
            <ul>
            {pages.map((page) => (
                <li key={page}>{page}</li>
            ))}
            </ul>
        </nav>
    )
}

export default Nav;