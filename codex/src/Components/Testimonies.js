import vid1 from "../images/flower1.mp4";
import cover from "../images/cover.jpg";
import img10 from "../images/images (10).jpeg";
import img11 from "../images/images (11).jpeg";
import img12 from "../images/images (12).jpeg";
import { useEffect, useRef, useState } from "react";

// import { useState, useEffect } from "react";

const Testimonies = (props) => {
  const [testimonyNo, setTestimonyNo] = useState(1);

  function useSwipe(callback) {
    const startX = useRef(null);
    const endX = useRef(null);

    useEffect(() => {
      const handleTouchStart = (e) => {
        startX.current = e.touches[0].clientX;
      };
      const handleTouchMove = (e) => {
        endX.current = e.touches[0].clientX;
      };
      const handleTouchEnd = (e) => {
        // use the last position of the finger
        endX.current = e.changedTouches[0].clientX;
        if (startX.current && endX.current) {
          callback(startX.current - endX.current);
        }
      };

      let swipeMe = document.getElementById("swipeMe");

      swipeMe.addEventListener("touchstart", handleTouchStart);
      swipeMe.addEventListener("touchmove", handleTouchMove);
      swipeMe.addEventListener("touchend", handleTouchEnd);

      return () => {
        swipeMe.removeEventListener("touchstart", handleTouchStart);
        swipeMe.removeEventListener("touchmove", handleTouchMove);
        swipeMe.removeEventListener("touchend", handleTouchEnd);
      };
    }, [callback]);
  }

  const swipeData = [
    {
      text: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum nisl et nunc facilisis, a commodo eros mollis. Nunc velpellentesque est. Curabitur at odio sit amet libero vulputateefficitur ac nec justo. Nulla vitae mauris quam. Nulla quam massa,faucibus id pretium ac, mattis eu velit. Donec sed risus a lacus fringilla finibus.",
      img: img10,
      owner: "Harry Porter",
      title: "Property Owner",
      id: 0,
    },
    {
      text: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum nisl et nunc facilisis, a commodo eros mollis. Nunc velpellentesque est. Curabitur at odio sit amet libero vulputateefficitur ac nec justo. Nulla vitae mauris quam. Nulla quam massa,faucibus id pretium ac, mattis eu velit. Donec sed risus a lacus fringilla finibus.",
      img: img11,
      owner: "Damain Marley",
      title: "Property Owner",
      id: 1,
    },
    {
      text: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum nisl et nunc facilisis, a commodo eros mollis. Nunc velpellentesque est. Curabitur at odio sit amet libero vulputateefficitur ac nec justo. Nulla vitae mauris quam. Nulla quam massa,faucibus id pretium ac, mattis eu velit. Donec sed risus a lacus fringilla finibus.",
      img: img12,
      owner: "Olamide Baddo",
      title: "Property Owner",
      id: 2,
    },
  ];
  const active = [1, 2, 3];

  useEffect(() => {
    document.querySelectorAll(".video").forEach(function (video) {
      video.parentNode.addEventListener("click", function () {
        if (video.paused) {
          video.play();
          this.querySelector(".playpause").style.display = "none";
          document.getElementById("cover").style.display = "none";
        } else {
          video.pause();
          this.querySelector(".playpause").style.display = "block";
          document.getElementById("cover").style.display = "block";
        }
      });
      document.getElementById("myVideo").addEventListener("ended", function () {
        document.querySelector(".playpause").style.display = "block";
        document.getElementById("cover").style.display = "block";
      });
    });
  }, []);

  const handleSwipe = (distance) => {
    if (distance > 0) {
      testimonyNo === 1 ? setTestimonyNo(3) : setTestimonyNo(testimonyNo - 1);
    } else {
      testimonyNo === 3 ? setTestimonyNo(1) : setTestimonyNo(testimonyNo + 1);
    }
  };

  useSwipe(handleSwipe);

  const handleCheck = (e) => {
    setTestimonyNo(parseInt(e.target.firstElementChild.innerHTML));
  };

  let circle = document.querySelectorAll(".circle");

  circle.forEach((item) => {
    item.classList.remove("active");
    if (parseInt(item.firstElementChild.innerHTML) === testimonyNo) {
      item.classList.add("active");
    }
  });

  function mapActive() {
    let activeMapped = active.map((x, y) => {
      return (
        <div key={y}>
          <div className="circle mx-1" onClick={handleCheck}>
            <p className="d-none">{x}</p>
          </div>
        </div>
      );
    });
    return activeMapped;
  }
  mapActive();

  function mapswipeData() {
    let filteredswipe = swipeData.filter((w, ind) => ind + 1 === testimonyNo);
    let swipeDataMapped = filteredswipe.map((x, y) => {
      const { text, img, owner, title, id } = x;
      return (
        <div key={id}>
          <div className="text">{text}</div>
          <div className="images owner-wrapper mt-3">
            <p>
              <img className="mage" src={img} alt="" />
            </p>
            <div className="ms-3">
              <h4 className="owner mt-2"> {owner}</h4>
              <p className="title">{title}</p>
            </div>
          </div>
        </div>
      );
    });
    return swipeDataMapped;
  }
  mapswipeData();

  return (
    <div className="testimony ">
      <div className="container">
        <div className="row ">
          <div className="col-xl-6 col-12 mt-xl-0 mt-5">
            <i class="fa-solid fa-quote-right"></i>

            <div className="testimony-wrapper bg-red" id="testimony-wrapper">
              {mapswipeData()}
            </div>
            <div className="swipeMe " id="swipeMe"></div>
            <div className="swipe d-flex mt-5">{mapActive()}</div>
          </div>
          <div className="col-xl-6 col-12 mt-xl-0 mt-5">
            <div className="video-wrapper">
              <img src={cover} alt="" className="cover" id="cover" />
              <video className="video" id="myVideo">
                <source src="/media/cc0-videos/flower.webm" type="video/webm" />
                <source src={vid1} type="video/mp4" />
                Download the
                <a href="/media/cc0-videos/flower.webm">WEBM</a>
                or
                <a href="/media/cc0-videos/flower.mp4">MP4</a>
                video.
              </video>
              <div className="playpause">
                <i class="fa-solid fa-play"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonies;
