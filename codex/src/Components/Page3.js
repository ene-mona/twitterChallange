import { Link } from "react-router-dom";
// import Controller from "./Controller";

const Page3 = (props) => {
  console.log(props);

  const {
    property,
    display,
    handleAddProperty,
    displayMyLiTag,
    handlePrevAndNext,
    handleClick,
  } = props;
  // console.log(displayMyLiTag());

  return (
    <div className=" pageThree" id="pageThree">
      <div className="container">
        <div className="pageThree-head">
          <h3 className="pageThree-header">list of properties</h3>
          <p className="pageThree-para">View All Property</p>
          <div className="line"></div>
        </div>
        <div className="row mt-3 ">
          {display}
          <div className="page-navigate-content">
            <ul className="Page-navigate">
              <li className="page-li jump  Prev">
                <Link
                  className="link"
                  to=""
                  onClick={(e) => handlePrevAndNext(e)}
                >
                  Prev
                </Link>
              </li>
              <li className="page-li li-link">
                <Link
                  className="link link-Active "
                  to=""
                  onClick={(e) => handleClick(e)}
                >
                  1
                </Link>
              </li>

              {displayMyLiTag()}
              <li className="page-li li-link">
                <Link
                  className="link link-Active "
                  to=""
                  onClick={(e) => handleClick(e)}
                >
                  {window.matchMedia("(min-width: 1200px)").matches
                    ? Math.ceil(property.length / 6)
                    : Math.ceil(property.length / 3)}
                </Link>
              </li>

              <li className="page-li jump Next" id="Next">
                <Link
                  className="link "
                  to=""
                  onClick={(e) => handlePrevAndNext(e)}
                >
                  Next
                </Link>
              </li>
            </ul>
            <i
              class="fa-solid fa-plus"
              id="fa-plus"
              onClick={handleAddProperty}
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Page3;
