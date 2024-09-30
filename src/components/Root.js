import React,{useState} from "react";
import Content from './Content';
import '../css/root.css'

function Root(){
    const [visible,setVisible] = useState(false);
    return(
        <div className="root">
            <div className="jumpPage">
                <button className="ShowMain" onClick={()=>{setVisible(!visible)}}>
                    click
                </button>
                {visible && <Content/>}
            </div>
        </div>
    )
}

export default Root;            