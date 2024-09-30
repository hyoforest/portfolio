import React from "react";
import Project01 from "./Project01";
import Project02 from "./Project02";
import Project03 from "./Project03";
import Project04 from "./Project04";
import Project05 from "./Project05";

function WorkPage(){
    return(
        <section id="work" className="work">
          <h2>Work</h2>
          <ul>
            <li><Project01/></li>
            <li><Project02/></li>
            <li><Project03/></li>
            <li><Project04/></li>
            <li><Project05/></li>
          </ul>
        </section>
    )
}

export default WorkPage;