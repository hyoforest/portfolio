import React from "react";
import Title from "../Title";
import Intro from "../Intro";
import Work from "../Work";
import Contact from "../Contact";
import {Link} from "react-router-dom"


const Components = [Title, Intro, Work, Contact];
function Nav({onNavigate}){
    return(
        <nav id="nav" className="nav" onClick={onNavigate}>
            <ul>
            {Components.map((component) => (
                <li key={component.name}>
                    <Link to={component.name}>{component.name} </Link></li>
            ))}
            </ul>
        </nav>
    )
}

export default Nav;