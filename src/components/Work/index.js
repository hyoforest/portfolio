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
          <div>
            <div><Project01/></div>
            <div><Project02/></div>
            <div><Project03/></div>
            <div><Project04/></div>
            <div><Project05/></div>
          </div>
        </section>
    )
}

export default WorkPage;