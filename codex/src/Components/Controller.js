import { useRef, useCallback, useMemo, useState } from "react";
import { Link } from "react-router-dom";
// import PropertyList from "./PropertyList";
import unsplash1 from "../images/unsplash1.png";
import unsplash2 from "../images/unsplash2.png";
import unsplash3 from "../images/unsplash3.png";
import unsplash4 from "../images/unsplash4.png";
import unsplash5 from "../images/unsplash5.png";
import unsplash6 from "../images/unsplash6.png";
import img11 from "../images/img11.jpg";
import img12 from "../images/img12.jpg";
import img13 from "../images/img13.jpg";
import img14 from "../images/img14.jpg";
import img15 from "../images/img15.jpg";
import img16 from "../images/img16.jpg";
import img17 from "../images/img17.jpg";
import img18 from "../images/img18.jpg";
import img19 from "../images/img19.jpg";
import img20 from "../images/img20.jpg";
import img21 from "../images/img21.jpg";

import img6 from "../images/img6.png";
import img7 from "../images/img7.png";
import img9 from "../images/img9.png";
import { useEffect } from "react";
import LazyLoad from "react-lazy-load";
// import { useLocation } from "react-router-dom";

const Controller = () => {
  const myArr = useRef([]);

  const presentNo = useRef(1);
  const lastNo = useRef(3);
  const properties = useRef(null);

  // array containing card details

  let spiceeInd = useRef([]);

  const [Room, setRoom] = useState(null);
  const [street, setStreet] = useState(null);
  const [state, setState] = useState(null);
  const [amount, setAmount] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [fileUpload, setFileUpload] = useState();

  // const [data, setData] = useState(null);

  const [plus, setPlus] = useState(0);

  const [property, setproperty] = useState([
    {
      img: unsplash5,
      text1: "2578 Folsom street, san francisco, CA, 94110",
      text2: "Private Room",
      text3: "$1200/month",
      img1: img6,
      img2: img7,
      img3: img9,
      id: 1,
    },
    {
      img: unsplash6,
      text1: "2578 Folsom street, san francisco, CA, 94110",
      text2: "Private Room",
      text3: "$1200/month",
      img1: img6,
      img2: img7,
      img3: img9,
      id: 2,
    },
    {
      img: unsplash3,
      text1: "2578 Folsom street, san francisco, CA, 94110",
      text2: "Private Room",
      text3: "$1200/month",
      img1: img6,
      img2: img7,
      img3: img9,
      id: 3,
    },
    {
      img: unsplash4,
      text1: "2578 Folsom street, san francisco, CA, 94110",
      text2: "Private Room",
      text3: "$1200/month",
      img1: img6,
      img2: img7,
      img3: img9,
      id: 4,
    },
    {
      img: unsplash1,
      text1: "2578 Folsom street, san francisco, CA, 94110",
      text2: "Private Room",
      text3: "$1200/month",
      img1: img6,
      img2: img7,
      img3: img9,
      id: 5,
    },
    {
      img: unsplash2,
      text1: "2578 Folsom street, san francisco, CA, 94110",
      text2: "Private Room",
      text3: "$1200/month",
      img1: img6,
      img2: img7,
      img3: img9,
      id: 6,
    },
    {
      img: img11,
      text1: "2578 Folsom street, san francisco, CA, 94110",
      text2: "Private Room",
      text3: "$1200/month",
      img1: img6,
      img2: img7,
      img3: img9,
      id: 7,
    },
    {
      img: img12,
      text1: "2578 Folsom street, san francisco, CA, 94110",
      text2: "Private Room",
      text3: "$1200/month",
      img1: img6,
      img2: img7,
      img3: img9,
      id: 8,
    },
    {
      img: img13,
      text1: "2578 Folsom street, san francisco, CA, 94110",
      text2: "Private Room",
      text3: "$1200/month",
      img1: img6,
      img2: img7,
      img3: img9,
      id: 9,
    },

    {
      img: img14,
      text1: "2578 Folsom street, san francisco, CA, 94110",
      text2: "Private Room",
      text3: "$1200/month",
      img1: img6,
      img2: img7,
      img3: img9,
      id: 10,
    },
    {
      img: img15,
      text1: "2578 Folsom street, san francisco, CA, 94110",
      text2: "Private Room",
      text3: "$1200/month",
      img1: img6,
      img2: img7,
      img3: img9,
      id: 11,
    },
    {
      img: img16,
      text1: "2578 Folsom street, san francisco, CA, 94110",
      text2: "Private Room",
      text3: "$1200/month",
      img1: img6,
      img2: img7,
      img3: img9,
      id: 12,
    },
    {
      img: img17,
      text1: "2578 Folsom street, san francisco, CA, 94110",
      text2: "Private Room",
      text3: "$1200/month",
      img1: img6,
      img2: img7,
      img3: img9,
      id: 13,
    },
    {
      img: img18,
      text1: "2578 Folsom street, san francisco, CA, 94110",
      text2: "Private Room",
      text3: "$1200/month",
      img1: img6,
      img2: img7,
      img3: img9,
      id: 14,
    },
    {
      img: img19,
      text1: "2578 Folsom street, san francisco, CA, 94110",
      text2: "Private Room",
      text3: "$1200/month",
      img1: img6,
      img2: img7,
      img3: img9,
      id: 15,
    },
    {
      img: img20,
      text1: "2578 Folsom street, san francisco, CA, 94110",
      text2: "Private Room",
      text3: "$1200/month",
      img1: img6,
      img2: img7,
      img3: img9,
      id: 16,
    },
    {
      img: img21,
      text1: "2578 Folsom street, san francisco, CA, 94110",
      text2: "Private Room",
      text3: "$1200/month",
      img1: img6,
      img2: img7,
      img3: img9,
      id: 17,
    },
    {
      img: img21,
      text1: "2578 Folsom street, san francisco, CA, 94110",
      text2: "Private Room",
      text3: "$1200/month",
      img1: img6,
      img2: img7,
      img3: img9,
      id: 18,
    },
    // {
    //   img: img21,
    //   text1: "2578 Folsom street, san francisco, CA, 94110",
    //   text2: "Private Room",
    //   text3: "$1200/month",
    //   img1: img6,
    //   img2: img7,
    //   img3: img9,
    //   id: 19,
    // },
    // {
    //   img: img21,
    //   text1: "2578 Folsom street, san francisco, CA, 94110",
    //   text2: "Private Room",
    //   text3: "$1200/month",
    //   img1: img6,
    //   img2: img7,
    //   img3: img9,
    //   id: 20,
    // },
    // {
    //   img: img21,
    //   text1: "2578 Folsom street, san francisco, CA, 94110",
    //   text2: "Private Room",
    //   text3: "$1200/month",
    //   img1: img6,
    //   img2: img7,
    //   img3: img9,
    //   id: 21,
    // },
    // {
    //   img: img21,
    //   text1: "2578 Folsom street, san francisco, CA, 94110",
    //   text2: "Private Room",
    //   text3: "$1200/month",
    //   img1: img6,
    //   img2: img7,
    //   img3: img9,
    //   id: 22,
    // },

    // {
    //   img: img21,
    //   text1: "2578 Folsom street, san francisco, CA, 94110",
    //   text2: "Private Room",
    //   text3: "$1200/month",
    //   img1: img6,
    //   img2: img7,
    //   img3: img9,
    //   id: 27,
    // },
    // {
    //   img: img21,
    //   text1: "2578 Folsom street, san francisco, CA, 94110",
    //   text2: "Private Room",
    //   text3: "$1200/month",
    //   img1: img6,
    //   img2: img7,
    //   img3: img9,
    //   id: 28,
    // },
    // {
    //   img: img21,
    //   text1: "2578 Folsom street, san francisco, CA, 94110",
    //   text2: "Private Room",
    //   text3: "$1200/month",
    //   img1: img6,
    //   img2: img7,
    //   img3: img9,
    //   id: 29,
    // },
    // {
    //   img: img21,
    //   text1: "2578 Folsom street, san francisco, CA, 94110",
    //   text2: "Private Room",
    //   text3: "$1200/month",
    //   img1: img6,
    //   img2: img7,
    //   img3: img9,
    //   id: 30,
    // },
    // {
    //   img: img21,
    //   text1: "2578 Folsom street, san francisco, CA, 94110",
    //   text2: "Private Room",
    //   text3: "$1200/month",
    //   img1: img6,
    //   img2: img7,
    //   img3: img9,
    //   id: 31,
    // },
    // {
    //   img: img21,
    //   text1: "2578 Folsom street, san francisco, CA, 94110",
    //   text2: "Private Room",
    //   text3: "$1200/month",
    //   img1: img6,
    //   img2: img7,
    //   img3: img9,
    //   id: 32,
    // },
    // {
    //   img: img21,
    //   text1: "2578 Folsom street, san francisco, CA, 94110",
    //   text2: "Private Room",
    //   text3: "$1200/month",
    //   img1: img6,
    //   img2: img7,
    //   img3: img9,
    //   id: 33,
    // },
    // {
    //   img: img21,
    //   text1: "2578 Folsom street, san francisco, CA, 94110",
    //   text2: "Private Room",
    //   text3: "$1200/month",
    //   img1: img6,
    //   img2: img7,
    //   img3: img9,
    //   id: 34,
    // },
    // {
    //   img: img21,
    //   text1: "2578 Folsom street, san francisco, CA, 94110",
    //   text2: "Private Room",
    //   text3: "$1200/month",
    //   img1: img6,
    //   img2: img7,
    //   img3: img9,
    //   id: 35,
    // },
    // {
    //   img: img21,
    //   text1: "2578 Folsom street, san francisco, CA, 94110",
    //   text2: "Private Room",
    //   text3: "$1200/month",
    //   img1: img6,
    //   img2: img7,
    //   img3: img9,
    //   id: 36,
    // },
    // {
    //   img: img21,
    //   text1: "2578 Folsom street, san francisco, CA, 94110",
    //   text2: "Private Room",
    //   text3: "$1200/month",
    //   img1: img6,
    //   img2: img7,
    //   img3: img9,
    //   id: 37,
    // },
    // {
    //   img: img21,
    //   text1: "2578 Folsom street, san francisco, CA, 94110",
    //   text2: "Private Room",
    //   text3: "$1200/month",
    //   img1: img6,
    //   img2: img7,
    //   img3: img9,
    //   id: 38,
    // },
    // {
    //   img: img21,
    //   text1: "2578 Folsom street, san francisco, CA, 94110",
    //   text2: "Private Room",
    //   text3: "$1200/month",
    //   img1: img6,
    //   img2: img7,
    //   img3: img9,
    //   id: 39,
    // },
    // {
    //   img: img21,
    //   text1: "2578 Folsom street, san francisco, CA, 94110",
    //   text2: "Private Room",
    //   text3: "$1200/month",
    //   img1: img6,
    //   img2: img7,
    //   img3: img9,
    //   id: 40,
    // },
    // {
    //   img: img21,
    //   text1: "2578 Folsom street, san francisco, CA, 94110",
    //   text2: "Private Room",
    //   text3: "$1200/month",
    //   img1: img6,
    //   img2: img7,
    //   img3: img9,
    //   id: 41,
    // },
    // {
    //   img: img21,
    //   text1: "2578 Folsom street, san francisco, CA, 94110",
    //   text2: "Private Room",
    //   text3: "$1200/month",
    //   img1: img6,
    //   img2: img7,
    //   img3: img9,
    //   id: 42,
    // },
    // {
    //   img: img21,
    //   text1: "2578 Folsom street, san francisco, CA, 94110",
    //   text2: "Private Room",
    //   text3: "$1200/month",
    //   img1: img6,
    //   img2: img7,
    //   img3: img9,
    //   id: 43,
    // },
  ]);

  const handleAddProperty = () => {
    const formPage = document.getElementById("formPage");
    formPage.scrollIntoView();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    let data = {
      img: fileUpload,
      text1: `${street},${state}`,
      text2: Room,
      text3: `$${amount}/month`,
      img1: img6,
      img2: img7,
      img3: img9,
      id: property.length + 1,
    };

    setproperty((property) => [...property, data]);
    e.target.reset();
    setFileUpload("");
  };
  useEffect(() => {
    const Next = document.getElementById("Next");

    Next.classList.add("activePrevNext");

    if (isSubmitted) {
      if (window.matchMedia("(min-width: 1200px)").matches) {
        presentNo.current = Math.ceil(property.length / 6);
      } else {
        presentNo.current = Math.ceil(property.length / 3);
      }

      active(presentNo.current);
      lastProperty();

      handleAll();
      scrollToDiv();
    }
  }, [property]);

  // images

  const dragOver = (e) => {
    e.preventDefault();
  };

  const dragEnter = (e) => {
    e.preventDefault();
  };

  const dragLeave = (e) => {
    e.preventDefault();
  };

  const fileDrop = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    setFileUpload(URL.createObjectURL(files[0]));
    // console.log(files);

    // console.log(files[0].name);
  };
  const handleBrowse = (e) => {
    setFileUpload(URL.createObjectURL(e.target.files[0]));
  };

  const handleCity = (e) => {
    setStreet(e.target.value);
  };
  const handleState = (e) => {
    setState(e.target.value);
  };
  const handleAmount = (e) => {
    setAmount(e.target.value);
  };
  const handleRoom = (e) => {
    setRoom(e.target.value);
  };

  const [liArr, setLiArr] = useState([]);

  const liArrTag = () => {
    if (window.matchMedia("(min-width: 1200px)").matches) {
      for (let i = 2; i < Math.ceil(property.length / 6); i++) {
        liArr.push(i);
        // console.log(i);
        if (Math.ceil(property.length / 3) > 6) {
          if (liArr.length % 4 === 0) {
            liArr.push("...");
          }
        }
      }
    } else {
      for (let i = 2; i < Math.ceil(property.length / 3); i++) {
        liArr.push(i);
        // console.log(i);
        if (Math.ceil(property.length / 3) > 6) {
          if (liArr.length % 4 === 0) {
            liArr.push("...");
          }
        }
      }
    }
    // console.log(liArr);
  };
  liArrTag();

  // mapping through liArr to output numbers of and on Controller

  const displayMyLiTag = () => {
    Math.ceil(property.length / 3) > 6
      ? liArr.splice(5, liArr.length - 5)
      : liArr.splice(4, liArr.length - 4);
    // console.log(liArr);

    // console.log(liArr.splice(7, 5));
    let displayLi = liArr.map((x, y) => {
      return (
        <li className="page-li li-link" key={y}>
          <Link
            className={"link link-Active " + x}
            to=""
            onClick={(e) => handleClick(e)}
          >
            {x}
          </Link>
        </li>
      );
    });
    // console.log(displayLi);
    return displayLi;
  };

  function lastProperty() {
    if (Math.ceil(property.length / 3) > 6) {
      liArr.splice(0, 1, "...");
      for (let i = 4; i >= 1; i--) {
        // console.log(i);
        liArr.splice(i, 1, Math.ceil(property.length / 3) - 5 + i);
      }
    } else {
      return;
    }
    scrollToDiv();
  }

  function scrollToDiv() {
    const div = document.getElementById("pageThree");
    div.scrollIntoView();
  }

  // functions inside handleClick
  function AllPagClicks(f) {
    function whenOne() {
      if (f === "1" && Math.ceil(property.length / 3) > 6) {
        // console.log(" i am one");
        setLiArr([]);
        liArrTag();
      }
    }
    whenOne();

    function whenMax() {
      if (
        parseInt(f) === Math.ceil(property.length / 3) &&
        Math.ceil(property.length / 3) > 6
      ) {
        // console.log("case max");
        lastProperty();
        // console.log(liArr);
      }
    }
    whenMax();
    function caseOne() {
      if (
        liArr.indexOf(parseInt(f)) === 0 &&
        parseInt(f) - 1 !== 1 &&
        parseInt(f) - 1 > 3 &&
        Math.ceil(property.length / 3) > 6
      ) {
        // console.log(liArr.indexOf(parseInt(f)));

        // console.log("case1");
        for (let i = 3; i >= 0; i--) {
          liArr.splice(i, 1, parseInt(f) - 3 + i);
        }

        // console.log(liArr);
      }
      // case1 else
      else if (
        liArr.indexOf(parseInt(f)) === 0 &&
        parseInt(f) - 1 !== 1 &&
        parseInt(f) - 1 <= 3 &&
        Math.ceil(property.length / 3) > 6
      ) {
        // console.log("case1 Else");
        setLiArr([]);
        liArrTag();
        // console.log(liArr);
      } else if (
        liArr.indexOf(parseInt(f)) === 1 &&
        parseInt(f) - 1 === 2 &&
        Math.ceil(property.length / 3) > 6
      ) {
        // console.log("case1 Else");
        setLiArr([]);
        liArrTag();
        // console.log(liArr);
      } else if (
        liArr.indexOf(parseInt(f)) === 0 &&
        parseInt(f) - 1 > 4 &&
        Math.ceil(property.length / 3) > 6
      ) {
        // console.log("case Boss");
        for (let i = 3; i >= 0; i--) {
          liArr.splice(i, 1, parseInt(f) - 3 + i);
        }
      }

      // Case2
      else if (
        liArr.indexOf(parseInt(f)) === 3 &&
        Math.ceil(property.length / 3) > 6
      ) {
        // console.log(liArr.indexOf(parseInt(f)));
        // console.log(liArr.indexOf(parseInt(e.target.innerHTML)) === 3);
        if (
          liArr.indexOf(parseInt(f) + 1) - liArr.indexOf(parseInt(f)) !== 1 &&
          Math.ceil(property.length / 3) > 6
        ) {
          if (
            Math.ceil(property.length / 3) - parseInt(f) > 4 &&
            Math.ceil(property.length / 3) > 6
          ) {
            // console.log("case2");

            for (let i = 0; i <= 3; i++) {
              // console.log(i);
              // console.log(parseInt(f) + i);
              liArr.splice(i, 1, parseInt(f) + i);
            }
          }
          if (
            Math.ceil(property.length / 3) - parseInt(f) <= 4 &&
            Math.ceil(property.length / 3) > 6
          ) {
            lastProperty();
          }
        }
        // console.log(liArr);
      }
    }
    caseOne();

    // Case3
    function caseThree() {
      if (
        liArr.indexOf(parseInt(f)) === 1 &&
        Math.ceil(property.length / 3) > 6
      ) {
        if (
          liArr.indexOf(parseInt(f) + 1) - liArr.indexOf(parseInt(f)) !== 1 &&
          Math.ceil(property.length / 3) > 6
        ) {
          if (
            Math.ceil(property.length / 3) - parseInt(f) > 4 &&
            Math.ceil(property.length / 3) > 6
          ) {
            // console.log("case3");

            for (let i = 0; i <= 3; i++) {
              // console.log(i);
              // console.log(parseInt(f) + i);
              liArr.splice(i, 1, parseInt(f) + i);
            }
          }
        }
      }
    }
    caseThree();
    // case4

    function caseFour() {
      if (
        liArr.indexOf(parseInt(f)) === 1 &&
        Math.ceil(property.length / 3) > 6
      ) {
        if (
          liArr.indexOf(parseInt(f) - 1) - liArr.indexOf(parseInt(f)) !== 1 &&
          Math.ceil(property.length / 3) > 6
        ) {
          if (
            Math.ceil(property.length / 3) - parseInt(f) <= 4 &&
            Math.ceil(property.length / 3) > 6
          ) {
            // console.log("case4");

            let elipse = liArr.splice(0, 1);
            liArr.splice(4, 1, elipse);

            for (let i = 3; i >= 0; i--) {
              // console.log(i);
              // console.log(parseInt(e.target.innerHTML) + i);
              liArr.splice(i, 1, parseInt(f) - 2 + i);
            }
          }
        }
      }
    }
    caseFour();

    function caseFive() {
      if (
        liArr.indexOf(parseInt(f)) === 4 &&
        Math.ceil(property.length / 3) > 6
      ) {
        if (Math.ceil(property.length / 3) - parseInt(f) <= 4) {
          lastProperty();
        } else {
          for (let i = 0; i <= 3; i++) {
            liArr.splice(i + 1, 1, parseInt(f) + i);
          }
        }
      }
    }
    caseFive();
  }

  const newNumber = useRef(0);
  // handleClick for small screens
  let handleClick = (e) => {
    for (let i = Math.ceil(property.length / 3) - 1; i >= 0; i--) {
      newNumber.current =
        parseInt(e.target.innerHTML) * Math.ceil(property.length / 3);
      myArr.current.push(property[newNumber.current - i]);
      console.log(i, property[newNumber.current - i]);
    }

    presentNo.current = parseInt(e.target.innerHTML);
    // console.log(presentNo.current);

    active(presentNo.current);

    if (e.target.innerHTML === "...") {
      return;
    }

    AllPagClicks(e.target.innerHTML);

    // First Check --- Edge case

    handleAll();
    scrollToDiv();
  };

  useEffect(() => {
    active(presentNo.current);
    handleAll();
  }, [presentNo.current]);

  // this funtion displays the total amount of cards needed on load
  // it has page number 1
  const loadArray = useCallback(() => {
    if (window.matchMedia("(min-width: 1200px)").matches) {
      for (let i = 1; i <= 6; i++) {
        myArr.current.push(property[i - 1]);
      }
    } else {
      for (let i = 1; i <= 3; i++) {
        myArr.current.push(property[i - 1]);
      }
    }
  }, [property]);
  loadArray();

  // mapping through the myArr to out put the cards
  const displayProperty = useCallback(() => {
    let undefineFilter = myArr.current.filter((x, y) => x !== undefined);
    properties.current = undefineFilter.map((x, ind) => {
      const { img, text1, text2, text3, img1, img2, img3, id } = x;
      return (
        <div className="col-lg-4 col-md-6 col-12 mb-5" key={id}>
          <div className="card ">
            <LazyLoad>
              <img src={img} className=" card-img-top" alt="..." />
            </LazyLoad>
            <div className="card-body">
              <p className="card-text1">{text1}</p>
              <p className="card-text2">
                {text2} {id}
              </p>
              <p className="card-text3">{text3}</p>
            </div>
            <div className="cardCon ">
              <p className="icons">
                <img src={img1} className="me-2" alt="..." />4
              </p>
              <p className="icons">
                <img src={img2} className="me-2" alt="..." />2
              </p>
              <p className="icons">
                <img src={img3} className="me-2" alt="..." />2
              </p>
            </div>
          </div>
        </div>
      );
    });
    let propertyList = properties.current;

    // console.log(propertyList);
    return { propertyList };
  }, [properties, plus]);
  const propertiesToDisplay = useRef(displayProperty().propertyList);
  const [display, setDisplay] = useState(propertiesToDisplay.current);

  // this function returns 6 different indexs from 0-property.length
  const runThree = useCallback(
    (e) => {
      if (window.matchMedia("(min-width: 1200px)").matches) {
        lastNo.current = 6 * e;
        if (e === 1) {
          myArr.current = [];
          loadArray();
        } else if (e >= 2) {
          myArr.current = [];
          for (let j = 1; j <= 6; j++) {
            myArr.current.push(property[lastNo.current - j]);
            console.log(property[lastNo.current - j]);
          }
        }
      } else {
        lastNo.current = 3 * e;
        if (e === 1) {
          myArr.current = [];
          loadArray();
        } else if (e >= 2) {
          myArr.current = [];
          for (let j = 1; j <= 3; j++) {
            myArr.current.push(property[lastNo.current - j]);
            console.log(property[lastNo.current - j]);
          }
        }
      }
    },
    [lastNo, myArr, loadArray, property]
  );

  runThree(presentNo.current);
  // shows current active page on lick of a function
  let active = (f) => {
    if (Math.ceil(property.length / 3) < 6) {
      setLiArr([]);
    }

    const activeColor = document.querySelectorAll(".link-Active");
    const activePrevNext = document.querySelectorAll(".jump");

    activePrevNext.forEach((item) => {
      if (item.classList.contains("Prev")) {
        if (presentNo.current > 1) {
          item.classList.add("activePrevNext");
        } else {
          item.classList.remove("activePrevNext");
        }
      }
      if (item.classList.contains("Next")) {
        if (window.matchMedia("(min-width: 1200px)").matches) {
          if (presentNo.current < Math.ceil(property.length / 6)) {
            item.classList.add("activePrevNext");
          } else {
            item.classList.remove("activePrevNext");
          }

          if (Math.ceil(property.length / 6) === presentNo.current) {
            lastProperty();
          }
        } else {
          if (presentNo.current < Math.ceil(property.length / 3)) {
            item.classList.add("activePrevNext");
          } else {
            item.classList.remove("activePrevNext");
          }
          if (Math.ceil(property.length / 3) === presentNo.current) {
            lastProperty();
          }
        }
      }
      // console.log(item);
    });

    activeColor.forEach((item) => {
      item.classList.remove("active");
      if (f === parseInt(item.innerHTML)) {
        item.classList.add("active");
        // console.log(item.innerHTML);
      }
    });
    // scrollToDiv();
  };
  // active(presentNo.current);
  // console.log(presentNo.current);
  // handles the display of all the cards on page change
  const handleAll = useCallback(() => {
    if (window.matchMedia("(min-width: 1200px)").matches) {
      setLiArr([]);
    }

    // ;
    liArrTag();
    // const div = document.getElementById("pageThree");
    // div.scrollIntoView();
    myArr.current = [];
    spiceeInd.current = [];

    runThree(presentNo.current);
    propertiesToDisplay.current = displayProperty().propertyList;

    presentNo.current === 1
      ? setDisplay(propertiesToDisplay.current)
      : setDisplay(propertiesToDisplay.current.reverse());

    spiceeInd.current = [];
  }, [displayProperty, runThree]);

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
      setLiArr([]);
      presentNo.current = 1;
      // scrollToDiv();

      active(presentNo.current);
      handleAll();
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [width]);

  // let handlePrevAndNext = (e) => {
  //   if (e.target.innerHTML === "Prev") {
  //     if (presentNo.current !== 1) {
  //       presentNo.current = presentNo.current - 1;

  //       handleAll(presentNo.current);
  //     }
  //   } else {
  //     if (presentNo.current !== Math.ceil(property.length / 3)) {
  //       presentNo.current = presentNo.current + 1;

  //       handleAll(presentNo.current);
  //     }
  //   }
  //   // active(presentNo.current);
  // };

  // let handleClick = (e) => {
  //   presentNo.current = parseInt(e.target.innerHTML);
  //   active(presentNo.current);

  //   handleAll();
  // };
  // handles the display of all the cards on click of prev and next

  // mistake
  let handlePrevAndNext = (e) => {
    // console.log(Math.ceil(property.length / 3) > 6);
    if (e.target.innerHTML === "Prev") {
      if (presentNo.current !== 1) {
        presentNo.current = presentNo.current - 1;

        // console.log(i);
        if (
          !liArr.includes(presentNo.current) &&
          Math.ceil(property.length / 3) > 6
        ) {
          for (let i = 0; i < liArr.length - 1; i++) {
            // console.log(presentNo.current + i);
            liArr.splice(i + 1, 1, presentNo.current + i);
          }
          if (
            presentNo.current - 1 === 1 ||
            (presentNo.current - 1 === 2 && Math.ceil(property.length / 3) > 6)
          ) {
            setLiArr([]);
            liArrTag();
          } else if (presentNo.current - 1 > 1) {
            // console.log("it is i");
            liArr.splice(4, 1, "...");
            for (let i = 0; i <= 3; i++) {
              // console.log(presentNo.current + i);
              liArr.splice(i, 1, presentNo.current + i);
            }
          }

          // console.log("contains");
        }

        handleAll(presentNo.current);
        // console.log(presentNo.current);
      }
      if (presentNo.current === 1 && Math.ceil(property.length / 3) > 6) {
        setLiArr([]);
        // console.log(liArr);
        liArrTag();
      }
    } else {
      if (window.matchMedia("(min-width: 1200px)").matches) {
        if (presentNo.current !== Math.ceil(property.length / 6)) {
          presentNo.current = presentNo.current + 1;

          for (let i = 0; i < liArr.length - 1; i++) {
            if (
              !liArr.includes(presentNo.current) &&
              Math.ceil(property.length / 6) > 6
            ) {
              // console.log(presentNo.current, liArr[i]);
              liArr.splice(i, 1, presentNo.current - 3 + i);
              if (
                Math.ceil(property.length / 6) - presentNo.current === 1 &&
                Math.ceil(property.length / 6) > 6
              ) {
                lastProperty();
              }
            }

            // console.log("contains");
          }

          // console.log(presentNo.current);
          // console.log(liArr);
        }
        if (
          presentNo.current === Math.ceil(property.length / 3) &&
          Math.ceil(property.length / 3) > 6
        ) {
          liArr.splice(0, 1, "...");
          for (let i = 4; i >= 1; i--) {
            // console.log(i);
            liArr.splice(i, 1, Math.ceil(property.length / 3) - 5 + i);
          }
        }
      } else {
        if (presentNo.current !== Math.ceil(property.length / 3)) {
          presentNo.current = presentNo.current + 1;

          for (let i = 0; i < liArr.length - 1; i++) {
            if (
              !liArr.includes(presentNo.current) &&
              Math.ceil(property.length / 3) > 6
            ) {
              // console.log(presentNo.current, liArr[i]);
              liArr.splice(i, 1, presentNo.current - 3 + i);
              if (
                Math.ceil(property.length / 3) - presentNo.current === 1 &&
                Math.ceil(property.length / 3) > 6
              ) {
                lastProperty();
              }
            }

            // console.log("contains");
          }

          // console.log(presentNo.current);
          // console.log(liArr);
        }
        if (
          presentNo.current === Math.ceil(property.length / 3) &&
          Math.ceil(property.length / 3) > 6
        ) {
          liArr.splice(0, 1, "...");
          for (let i = 4; i >= 1; i--) {
            // console.log(i);
            liArr.splice(i, 1, Math.ceil(property.length / 3) - 5 + i);
          }
        }
      }
    }
    handleAll(presentNo.current);

    active(presentNo.current);
    scrollToDiv();
  };

  // let handlePrevAndNext = (e) => {
  //   if (e.target.innerHTML === "Prev") {
  //     if (presentNo.current !== 1) {
  //       presentNo.current = presentNo.current - 1;
  //       handleAll(presentNo.current);
  //     }
  //   } else {
  //     if (presentNo.current !== Math.ceil(property.length / 3)) {
  //       presentNo.current = presentNo.current + 1;
  //       handleAll(presentNo.current);
  //     }
  //   }
  //   active(presentNo.current);
  // };
  return {
    property,
    display,
    displayMyLiTag,
    handlePrevAndNext,
    handleAddProperty,
    handleClick,
    property,
    Room,
    amount,
    state,
    street,
    fileUpload,
    dragOver,
    dragEnter,
    dragLeave,
    fileDrop,
    handleBrowse,
    handleAmount,
    handleCity,
    handleRoom,
    handleState,
    handleSubmit,
  };
};
export default Controller;
