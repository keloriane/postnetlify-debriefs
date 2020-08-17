import React, { useEffect, useRef } from "react";
import "./menu.scss";
import { Link, withRouter } from "react-router-dom";
import gsap from "gsap";
import { staggerRevealClose } from "./../../functions/Animation";

import logoMin from "./../../assets/images/logo-min-white.png";

const Menu = ({ state }) => {
  let menu = useRef(null);
  let revealMenu = useRef(null);
  let revealMenuBackground = useRef(null);

  useEffect(() => {
    const menuTl = gsap.timeline({ paused: true });
    let page = document.getElementById("page");
    // If the menu is open and we click the menu button to close it.
    let menuItems = document.querySelectorAll(".menu__links");
    if (state.clicked === false) {
      // If menu is closed and we want to open it.

      staggerRevealClose(revealMenu, revealMenuBackground, menu);
      // Set menu to display none
      page.style.overflow = "unset";
    } else if (
      state.clicked === true ||
      (state.clicked === true && state.initial === null)
    ) {
      // Set menu to display block
      page.style.overflow = "hidden";
      gsap.to(menu, { duration: 0, css: { display: "block" } });
      gsap.to([revealMenuBackground, revealMenu], {
        duration: 0,
        opacity: 1,
        height: "100%",
      });

      menuTl
        //Allow menu to have height of 100%
        .from([revealMenuBackground, revealMenu], {
          duration: 0.8,
          height: 0,
          transformOrigin: "right top",
          ease: "power3.inout",
          stagger: {
            amount: 0.1,
          },
        })
        .from([menuItems, "menu__item:before"], {
          duration: 0.8,
          y: "100%",
          delay: -0.8,
          ease: "power3.inOut",
          stagger: {
            amount: 0.3,
          },
        });
      menuTl.play();
    } else {
    }
  }, [state]);

  return (
    <div ref={(el) => (menu = el)} className="main-menu no-scroll">
      <div ref={(el) => (revealMenu = el)} className="menu-layer">
        <div className="menu-container">
          <div className="inner-menu-logo">
            <img className="logo-min" src={logoMin} alt="" />
            <svg
              width="482"
              height="84"
              viewBox="0 0 482 84"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M29.6484 83.6364C55.1314 83.6364 70.5682 67.8729 70.5682 41.7365C70.5682 15.6818 55.1314 0 29.8935 0H0V83.6364H29.6484ZM17.6829 68.4854V15.1509H28.9542C44.636 15.1509 52.9261 23.1552 52.9261 41.7365C52.9261 60.3995 44.636 68.4854 28.9134 68.4854H17.6829Z"
                fill="white"
              />
              <path
                d="M89.417 83.6364H145.937V69.0572H107.1V49.0874H142.874V34.5082H107.1V14.5792H145.774V0H89.417V83.6364Z"
                fill="white"
              />
              <path
                d="M165.582 83.6364H201.315C220.101 83.6364 230.106 73.8352 230.106 60.522C230.106 48.1481 221.244 40.6747 211.729 40.2255V39.4087C220.428 37.4485 226.839 31.282 226.839 21.44C226.839 8.90269 217.528 0 199.069 0H165.582V83.6364ZM183.265 69.1797V46.9638H198.089C206.583 46.9638 211.852 51.8644 211.852 58.766C211.852 65.055 207.564 69.1797 197.681 69.1797H183.265ZM183.265 34.9982V14.2933H196.701C204.542 14.2933 208.993 18.3363 208.993 24.3803C208.993 30.9961 203.602 34.9982 196.374 34.9982H183.265Z"
                fill="white"
              />
              <path d="M329.778 0H312.095V83.6364H329.778V0Z" fill="white" />
              <path
                d="M350.076 83.6364H406.596V69.0572H367.759V49.0874H403.533V34.5082H367.759V14.5792H406.433V0H350.076V83.6364Z"
                fill="white"
              />
              <path
                d="M426.241 83.6364H443.924V49.0874H477.942V34.5082H443.924V14.5792H481.618V0H426.241V83.6364Z"
                fill="white"
              />
              <path
                d="M298.327 83.6364L280.644 83.6364L280.644 53.9879L267.739 53.9879L251.894 83.6364L232.373 83.6364L250.138 51.1293C240.623 47.0455 235.355 38.7553 235.355 27.3207C235.355 10.6996 246.34 -4.54484e-06 265.33 -2.8847e-06L298.327 0L298.327 83.6364ZM280.644 39.7763L280.644 14.4567L268.719 14.4567C258.51 14.4567 253.568 18.9897 253.568 27.3207C253.568 35.6108 258.51 39.7763 268.638 39.7763L280.644 39.7763Z"
                fill="#85C3E6"
              />
            </svg>
          </div>
          <div className="menu-links">
            <div className="vertical-menu-line"></div>
            <nav>
              <ul className="mainmenu">
                <li className="menu__item">
                  {" "}
                  <Link className="menu__links" to="/">
                    {" "}
                    Accueil{" "}
                  </Link>{" "}
                </li>
                <li className="menu__item">
                  {" "}
                  <Link className="menu__links" to="/blog">
                    {" "}
                    Blog{" "}
                  </Link>{" "}
                </li>
                <li className="menu__item">
                  {" "}
                  <Link className="menu__links" to="/services">
                    {" "}
                    Services{" "}
                  </Link>{" "}
                </li>
                <li className="menu__item">
                  {" "}
                  <Link className="menu__links" to="/webinaire">
                    {" "}
                    Webinaires{" "}
                  </Link>{" "}
                </li>
                <li className="menu__item">
                  {" "}
                  <Link className="menu__links" to="techspace/digital-career">
                    {" "}
                    Digital career center{" "}
                  </Link>{" "}
                </li>
                <li className="menu__item">
                  {" "}
                  <Link className="menu__links" to="/contact">
                    {" "}
                    Contact{" "}
                  </Link>{" "}
                </li>
              </ul>
            </nav>
          </div>
          <div className="button-techspace">
            <div className="line"></div>
            <Link to="/techspace/">
              <button>
                <div className="button-overlay"></div>
                <p className="animated-button thar-three">l'asbl</p>
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div
        ref={(el) => (revealMenuBackground = el)}
        className="menu-secondary-layer"
      >
        {" "}
      </div>
    </div>
  );
};
export default withRouter(Menu);
