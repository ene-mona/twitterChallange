// import { Link } from "react-router-dom";
import { Link, animateScroll as scroll } from "react-scroll";
import logo from "../images/img4.png";

const Footer = (props) => {
  const { handleHomePage } = props;
  return (
    <div className="container footer mb-5">
      <div className="footer-line"></div>
      <div className="row">
        <div className="col-xl-6 col-lg-4">
          <img src={logo} className="footer-logo " alt="logo image" />
        </div>
        <div className="col-xl-6 col-lg-8 mt-5 mt-lg-0">
          <div className="location d-flex align-items-center">
            <p>
              <i class="fa-solid fa-location-dot cons"></i>
            </p>
            <p className="location-text">
              345 Faulconer Drive, Suite 4 • Charlottesville, CA, 12345
            </p>
          </div>
          <div className="telNo d-flex">
            <div className="number d-flex align-items-center">
              <p>
                <i class="fa-solid fa-phone cons"></i>
              </p>
              <p className="callNo">(123) 456-7890</p>
            </div>
            <div className="fax d-flex align-items-center">
              <p>
                <i class="fa-solid fa-print cons"></i>
              </p>
              <p className="callNo">(123) 456-7890</p>
            </div>
          </div>
          <div className="socialMedia d-flex mt-4 align-items-center">
            <p>Social Media</p>
            <ul className="socialCons ">
              <li className="d-inline cons">
                <i class="fa-brands fa-square-facebook"></i>
              </li>
              <li className="d-inline cons">
                <i class="fa-brands fa-twitter"></i>
              </li>
              <li className="d-inline cons">
                <i class="fa-brands fa-linkedin-in"></i>
              </li>
              <li className="d-inline cons">
                <i class="fa-brands fa-youtube"></i>
              </li>
              <li className="d-inline cons">
                <i class="fa-brands fa-instagram"></i>
              </li>
              <li className="d-inline cons">
                <i class="fa-brands fa-google-plus-g"></i>
              </li>
              <li className="d-inline cons">
                <i class="fa-brands fa-pinterest"></i>
              </li>
              <li className="d-inline cons">
                <i class="fa-solid fa-wifi"></i>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-butt">
        <div className="lineTwo"></div>

        <div className="mt-3 d-flex flex-column align-items-center flex-xl-row justify-content-between">
          <ul className="menu ">
            <li className="d-inline me-5">About us</li>
            <li className="d-inline me-5">Contact us</li>
            <li className="d-inline me-5">Help</li>
            <li className="d-inline me-5">Privacy Policy</li>
            <li className="d-inline me-5">Disclaimer</li>
          </ul>

          <p className="copyRight">
            Copyright © 2020 Minimumlivingcost. All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
