import vector from "../images/Vector.png";
import vector1 from "../images/Vector-1.png";
import vector2 from "../images/Vector-2.png";
import vector3 from "../images/Vector-3.png";
import vector4 from "../images/Vector-4.png";
import vector5 from "../images/Vector-5.png";

const Data = () => {
  const items = [
    {
      img: vector,
      text: "Pay as Little as possible!",
      id: 1,
    },
    {
      img: vector1,
      text: "Enjoy wisdom of community!",
      id: 2,
    },
    {
      img: vector2,
      text: "Let's take care of Landlord!",
      id: 3,
    },
    {
      img: vector3,
      text: "Enjoy peaceful Environment!",
      id: 4,
    },
    {
      img: vector4,
      text: "Stay Safe! Save Money!",
      id: 5,
    },
    {
      img: vector5,
      text: "Pay for what you use !",
      id: 6,
    },
  ];
  let itemsContent = items.map((x, ind) => {
    const { img, id, text } = x;
    return (
      <div className="col-xl-4 col-md-4 col-6  col-lg-6" key={id}>
        <div className="vec-wrap">
          <img className="vec" src={img} alt="ReactMage" />
        </div>
        <p className="vec-text mt-3">{text}</p>
      </div>
    );
  });
  return { itemsContent };
};
export default Data;
