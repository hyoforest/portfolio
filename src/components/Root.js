import React, { useState, useEffect, useRef } from "react";
import Content from "./Content";
import "../css/test.css";

function Root() {
  const [visible, setVisible] = useState(false);
  const lightRef = useRef(null);
  const height = 100;
  const width = 100;

  const openEffect = () => {
    setVisible(true);
  };

  useEffect(() => {
    const setPosition = (e) => {
      if (lightRef.current) {
        lightRef.current.style.top = e.pageY - height / 2 + "px";
        lightRef.current.style.left = e.pageX - width / 2 + "px";
      }
    };
    document.addEventListener("mousemove", setPosition);
    document.addEventListener("touchmove", setPosition);
    return () => {
      document.removeEventListener("mousemove", setPosition);
      document.removeEventListener("touchmove", setPosition);
    };
  }, []);

  return (
    <div className="root">
      <div className="light" ref={lightRef}></div>
      <div className="jumpPage">
        {!visible && (
        <button className="ShowMain" onClick={openEffect}>
        클릭
        </button>
        )}
        {visible && <Content />}
    </div>
    </div>
);
}

export default Root;
