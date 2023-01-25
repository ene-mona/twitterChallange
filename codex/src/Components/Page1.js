import MyMap from "./MyMap";

const Page1 = () => {
  return (
    <>
      <div id=" banner-container " className=" banner-container container">
        <div className="banner-content ">
          <p className="banner-text">
            The most affortable place to stay in the san franciso bay area
          </p>

          <div className="mapouter">
            <div className="gmap_canvas ">
              <MyMap />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Page1;
