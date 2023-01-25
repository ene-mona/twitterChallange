import img4 from "../images/img4.png";
import React, { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = (props) => {
  const { handleSidebar } = props;
  const elements = useRef(null);
  const location = useLocation();
  const homeRef = useRef(null);

  useEffect(() => {
    elements.current = document.querySelectorAll(".nav-link");
    elements.current.forEach((element) => {
      if (element.href === window.location.href) {
        element.setAttribute("aria-current", "page");
      } else {
        element.removeAttribute("aria-current");
      }
    });
  }, [location]);
  const handleScroll = () => {
    homeRef.current.scrollIntoView({ top: 100, behavior: "smooth" });
  };
  return (
    <>
      <i class="fa-solid fa-arrow-up scroll-up" onClick={handleScroll}></i>
      <div id="myNav" className=" myNav  container" ref={homeRef}>
        <div className="myNav-wrapper">
          <div
            className="logo"
            style={{ backgroundImage: `url(${img4})` }}
          ></div>

          <ul className="myNav-list">
            <li className="list  ">
              <Link className="nav-link" to="/" data-link-alt="Home">
                <span>Home</span>
              </Link>
            </li>
            <li className="list ">
              <Link
                className="nav-link"
                to="Landloard"
                data-link-alt="Landloard"
              >
                <span>Landloard</span>
              </Link>
            </li>
            <li className="list ">
              <Link className="nav-link" to="Tenant" data-link-alt="Tenant">
                <span>Tenant</span>
              </Link>
            </li>
            <li className="list">
              <Link
                className="nav-link"
                to="Contact"
                data-link-alt="Contact Us"
              >
                <span className="">Contact Us</span>
              </Link>
              {/* <div className=" active-liner"></div> */}
            </li>
          </ul>

          <i className="fa-solid fa-arrow-right" onClick={handleSidebar}></i>
        </div>
        <div className="line"></div>
      </div>
    </>
  );
};
export default Navbar;
