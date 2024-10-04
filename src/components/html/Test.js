import React, { useEffect } from "react";
import "../../css/test.css";
import { gsap } from "gsap";

function Test() {
    useEffect(() => {
        const cursor = document.querySelector(".mouse__cursor");
        const cursorRect = cursor.getBoundingClientRect();
        const mouseWrap = document.querySelector(".mouse__wrap");
        const imgMove = mouseWrap.querySelector("img");

        const handleMouseMove = (e) => {
            gsap.to(cursor, {
                duration: 0.2,
                left: e.pageX - cursorRect.width / 2,
                top: e.pageY - cursorRect.height / 2,
            });

            let mousePageX = e.pageX;
            let mousePageY = e.pageY;

            let centerPageX = window.innerWidth / 2 - mousePageX;
            let centerPageY = window.innerHeight / 2 - mousePageY;

            gsap.to(imgMove, {
                duration: 0.3,
                x: centerPageX / 20,
                y: centerPageY / 20,
            });
        };

        mouseWrap.addEventListener("mousemove", handleMouseMove);
        return () => {
            mouseWrap.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <div className="test">
            <section id="mouseType">
                <div className="mouse__cursor"></div>
                <div className="mouse__wrap">
                    <div>
                        <img src="https://images.unsplash.com/photo-1726820233490-ff4e1cf50ce2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="이미지" />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Test;
