import { Link } from "react-router-dom";

const NavOnMobile = (props) => {
  // const { handleHideSidebar } = props;
  return (
    <div className="NavOnMobile " id="NavOnMobile">
      <ul className="myNav-list-mobile text-light">
        <div className="NavOnMobileCons animateOne ">
          <p>
            <i class="fa-solid fa-house-user"></i>
          </p>
          <li className="list-mobile  d-inline">
            <Link className="nav-link-mobile" to="/" data-link-alt="Home">
              <span>Home</span>
            </Link>
          </li>
        </div>
        <div className="NavOnMobileCons animateTwo ">
          <p>
            <i class="fa-solid fa-landmark"></i>
          </p>
          <li className="list-mobile   d-inline">
            <Link
              className="nav-link-mobile"
              to="Landloard"
              data-link-alt="Landloard"
            >
              <span>Landloard</span>
            </Link>
          </li>
        </div>

        <div className="NavOnMobileCons animateThree ">
          <p>
            <i class="fa-solid fa-users"></i>
          </p>
          <li className="list-mobile  d-inline ">
            <Link
              className="nav-link-mobile"
              to="Tenant"
              data-link-alt="Tenant"
            >
              <span>Tenant</span>
            </Link>
          </li>
        </div>

        <div className="NavOnMobileCons animateFour ">
          <p>
            <i class="fa-solid fa-address-book"></i>
          </p>
          <li className="list-mobile  d-inline">
            <Link
              className="nav-link-mobile"
              to="Contact"
              data-link-alt="Contact Us"
            >
              <span className="">Contact Us</span>
            </Link>
            {/* <div className=" active-liner"></div> */}
          </li>
        </div>
      </ul>
      {/* <i className="fa-solid fa-arrow-right" onClick={handleHideSidebar}></i> */}
    </div>
  );
};

export default NavOnMobile;
