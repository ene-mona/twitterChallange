import img3 from "../images/img3.png";
import img24 from "../images/img24.png";
import img22 from "../images/img22.png";
import img23 from "../images/img23.png";

const Page4 = () => {
  return (
    <div className="container pageFour">
      <div className="row">
        <div className="col-xl-7 col-12">
          <div className="imageWrap-one">
            <div className="text-ontop-lg">
              <img className="img-lg" src={img24} alt="image" />
              <p>Flexible Leases</p>
            </div>

            <div className="text-ontop-sm">
              <img className="img-sm" src={img3} alt="image" />
              <p>7-Day Happiness Guaranteed</p>
            </div>
          </div>
          <div className="imageWrap-two">
            <div className="text-ontop-xsm">
              <img className="img-lg" src={img22} alt="image" />
              <p>Monthly House Cleaning</p>
            </div>
            <div className="text-ontop-md">
              <img className="img-sm" src={img23} alt="image" />
              <p>Choose Your Own Roommate</p>
            </div>
          </div>
        </div>
        <div className="pageFour-headerAndText col-xl-5 col-12 mt-xl-0 mt-5 ">
          <h3 className="header">
            Flexibility and options to suit your lifestyle.
          </h3>
          <p className="paraOne">
            You need it? We got it. We make finding your next home easy,
            comfortable, and simple. From our happiness guarantee to our
            selective roommate finder option. We provide you the flexibility
            that you most desire.
          </p>
          <p className="col-btn">Search Rooms</p>
        </div>
      </div>
    </div>
  );
};
export default Page4;
