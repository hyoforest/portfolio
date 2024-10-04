import React, { useState, useEffect,useRef } from "react";
import Content from "./Content";
import "../../css/root.css";
import { AnimatePresence, motion } from "framer-motion";
import { gsap } from "gsap";

function Root() {
  const [visible, setVisible] = useState(false);
  const lightRef = useRef(null);
  const height = 100;
  const width = 100;

  const openEffect = () => {
    setVisible(true);
  };

  useEffect(() => {
    const cursor = document.querySelector(".mouse_cursor");
    const imgMove = document.querySelector(".jump_wrap .jump_bg img");
    
    const handleMouseMove = (e) => {
      const cursorRect = cursor.getBoundingClientRect();

      // 커서 위치 설정
      gsap.to(cursor, {
        duration: 0.2,
        left: e.pageX - cursorRect.width / 2,
        top: e.pageY - cursorRect.height / 2,
      });

      // 마우스 좌표 값
      let mousePageX = e.pageX;
      let mousePageY = e.pageY;

      // 마우스 좌표 값 가운데로 초기화
      let centerPageX = window.innerWidth / 2 - mousePageX;
      let centerPageY = window.innerHeight / 2 - mousePageY;

      // 이미지 움직이기
      gsap.to(imgMove, {
        duration: 0.3,
        x: centerPageX / 20,
        y: centerPageY / 20,
      });
    };

    const mouseWrap = document.querySelector(".jump_wrap .jump_bg");
    mouseWrap.addEventListener("mousemove", handleMouseMove);

    const setPosition = (e) => {
      if (lightRef.current) {
        lightRef.current.style.top = e.pageY - height / 2 + "px";
        lightRef.current.style.left = e.pageX - width / 2 + "px";
      }
    };
    document.addEventListener("mousemove", setPosition);
    document.addEventListener("touchmove", setPosition);

    // Cleanup
    return () => {
      mouseWrap.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mousemove", setPosition);
      document.removeEventListener("touchmove", setPosition);
    };
  }, []);

  return (
    <div className="root">
      {!visible && (
        <div className="jumpCont" onClick={openEffect}>
          <div className="mouse_cursor"></div>
          <div className="jump_wrap">
            <div className="jump_bg">
            <img src="https://images.unsplash.com/photo-1657486234199-fd558249b3a1?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
              <div className="jump_text">
              <p>Click Anywhere</p>
              </div>
            </div>
          </div>
        </div>
      )}
      <AnimatePresence mode="wait">
        {visible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Content />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Root;
