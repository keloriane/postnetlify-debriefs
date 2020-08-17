import React, { useEffect } from "react";
import gsap from "gsap";
import "./cursor.scss";
const Cursor = () => {
  useEffect(() => {
    let page = document.getElementById("page");
    let cursor = document.getElementsByClassName("c-cursor");
    let innerCursor = document.getElementById("inner-cursor");
    const allowTagNames = ["A", "BUTTON", "H1", "H2", "H3", "P", "SVG"];

    const enterMouse = () => {
      gsap.to([cursor, innerCursor], 0.1, {
        ease: "power3.inIn",
      });
    };

    const mouseMovePos = (e) => {
      const mousePos = {
        x: e.clientX,
        y: e.clientY,
      };
      gsap.to(innerCursor, 0.1, {
        x: mousePos.x,
        y: mousePos.y,
        ease: "power4.inOut",
      });

      gsap.to(cursor, 0.1, {
        x: mousePos.x,
        y: mousePos.y,
        ease: "power4.inOut",
      });
    };

    const updateOnHover = (e) => {
      const { tagName, classList } = e.target;
      if (allowTagNames.includes(tagName) || classList.contains("is-active")) {
        document.querySelector("#page").classList.toggle("is-hover");
      }
    };

    page.addEventListener("mouseenter", enterMouse);
    page.addEventListener("mousemove", mouseMovePos);
    page.addEventListener("mouseover", updateOnHover);
    page.addEventListener("click", (e) => {});
  });
  return (
    <div>
      <div className="c-cursor"></div>
      <div id="inner-cursor"></div>
    </div>
  );
};

export default Cursor;
