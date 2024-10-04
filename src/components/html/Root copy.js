import React, { useState, useEffect, useRef } from "react";
import Content from "./Content";
import styles from "../../css/root.module.css";
import "../../css/test.css";
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
    const setPosition = (e) => {
      if (lightRef.current) {
        lightRef.current.style.top = e.pageY - height / 2 + "px";
        lightRef.current.style.left = e.pageX - width / 2 + "px";
      }
    };
    document.addEventListener("mousemove", setPosition);
    document.addEventListener("touchmove", setPosition);

    const cursor = lightRef.current;
    const mouseWrap = document.querySelector(".jump_wrap");
    const imgMove = mouseWrap ? mouseWrap.querySelector(".jump_bg img") : null;

    let cursorRect;
    if (cursor) {
      cursorRect = cursor.getBoundingClientRect();
    }

    const handleMouseMove = (e) => {
      console.log('Mouse moved');
      if (cursorRect) {
        gsap.to(cursor, {
          duration: 0.2,
          left: e.pageX - cursorRect.width / 2,
          top: e.pageY - cursorRect.height / 2,
        });

        let mousePageX = e.pageX;
        let mousePageY = e.pageY;

        let centerPageX = window.innerWidth / 2 - mousePageX;
        let centerPageY = window.innerHeight / 2 - mousePageY;

        if (imgMove) {
          gsap.to(imgMove, {
            duration: 0.3,
            x: centerPageX / 20,
            y: centerPageY / 20,
          });
        }
      }
    };

    mouseWrap.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", setPosition);
      document.removeEventListener("touchmove", setPosition);
      mouseWrap.removeEventListener("mousemove", handleMouseMove);
    };
  }, []); // 의존성 배열은 빈 배열로 유지

  return (
    <div className={styles.root}>
      {!visible && (
        <div className={styles.jumpPage} onClick={openEffect}>
          <div className={styles.jumpCont}>
            <div className={styles.light} ref={lightRef}></div>
            <div className="jump_wrap">
              <div className={styles.jump_bg}>
                <img src="https://images.unsplash.com/photo-1727252161075-0deb18037173?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
              </div>
              <p className={styles.jump_text}>Click Anywhere</p>
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
