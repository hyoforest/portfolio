import React from "react";
import Title from "../Title";
import Intro from "../Intro";
import Work from "../Work";
import Contact from "../Contact";


const Components = [Title, Intro, Work, Contact];
function Nav({onNavigate}){
    return(
        <nav id="nav" className="nav" onClick={onNavigate}>
            <ul>
            {Components.map((component) => (
                <li key={component.name}>{component.name}</li>
            ))}
            </ul>
        </nav>
    )
}

export default Nav;