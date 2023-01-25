import img10 from "../images/img10.png";
import Data from "./Data";

const Page2 = () => {
  const { itemsContent } = Data();

  return (
    <div className="container pageTwo ">
      <h3 className="pageTwo-header">
        minimum living cost takes care of everything
      </h3>
      <div className="line"></div>
      <div className="row  firstRow mt-5 mt-xl-0">
        <div className="col-xl-4 col-lg-6">
          <img
            className="firstMage w-100 mt-xl-3"
            src={img10}
            alt="ReactMage"
          />
        </div>
        <div className="col-xl-8 col-lg-6 mt-5 mt-lg-0">
          <div className="row group-card">{itemsContent}</div>
        </div>
      </div>
    </div>
  );
};
export default Page2;
