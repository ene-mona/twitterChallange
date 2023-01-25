import Navbar from "./Components/Navbar";
import Page1 from "./Components/Page1";

import { BrowserRouter as Router } from "react-router-dom";
import Page2 from "./Components/Page2";
import Page3 from "./Components/Page3";
import Page4 from "./Components/Page4";
import FormPage from "./Components/FormPage";
import Controller from "./Components/Controller";
import { createContext } from "react";
import img2 from "../src/images/img2.png";
import Testimonies from "./Components/Testimonies";
// import Swipe from "./Components/Swipe";
import Footer from "./Components/Footer";
import NavOnMobile from "./Components/NavOnMobile";
// import useSwipe from "./Components/SwipeableComponent";

export const UserImage = createContext();
export const UserdragOver = createContext();
export const UserdragEnter = createContext();
export const UserfileDrop = createContext();
export const UserdragLeave = createContext();
export const UserBrowse = createContext();

function App() {
  const {
    property,
    display,
    displayMyLiTag,
    handlePrevAndNext,
    handleAddProperty,
    handleClick,
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
    handleHomePage,
  } = Controller();

  document.addEventListener("click", toRemoveEventsMobile);

  function toRemoveEventsMobile(e) {
    const showNavOnMobile = document.getElementById("NavOnMobile");
    const AnimatedNavLink = document.querySelectorAll(".NavOnMobileCons");
    const myNav = document.getElementById("myNav");
    const banner = document.getElementById(" banner-container ");

    if (!e.target.classList.contains("fa-arrow-right")) {
      document.body.style.overflow = "scroll";

      showNavOnMobile.classList.remove("showNavOnMobile");

      myNav.classList.remove("hideMyNav");

      banner.classList.remove("hidebanner-container");

      AnimatedNavLink.forEach((item) => {
        if (item.classList.contains("animateOne")) {
          item.classList.remove("animateOneCum");
        } else if (item.classList.contains("animateTwo")) {
          item.classList.remove("animateTwoCum");
        } else if (item.classList.contains("animateThree")) {
          item.classList.remove("animateThreeCum");
        } else if (item.classList.contains("animateFour")) {
          item.classList.remove("animateFourCum");
        }
      });
    }
  }

  const handleSidebar = () => {
    const showNavOnMobile = document.getElementById("NavOnMobile");
    const AnimatedNavLink = document.querySelectorAll(".NavOnMobileCons");
    const myNav = document.getElementById("myNav");
    const banner = document.getElementById(" banner-container ");

    document.body.style.overflow = "hidden";

    showNavOnMobile.classList.contains("showNavOnMobile")
      ? showNavOnMobile.classList.remove("showNavOnMobile")
      : showNavOnMobile.classList.add("showNavOnMobile");

    myNav.classList.contains("hideMyNav")
      ? myNav.classList.remove("hideMyNav")
      : myNav.classList.add("hideMyNav");

    banner.classList.contains("hidebanner-container")
      ? banner.classList.remove("hidebanner-container")
      : banner.classList.add("hidebanner-container");

    AnimatedNavLink.forEach((item) => {
      if (item.classList.contains("animateOne")) {
        item.classList.contains("animateOneCum")
          ? item.classList.remove("animateOneCum")
          : item.classList.add("animateOneCum");
      } else if (item.classList.contains("animateTwo")) {
        item.classList.contains("animateTwoCum")
          ? item.classList.remove("animateTwoCum")
          : item.classList.add("animateTwoCum");
      } else if (item.classList.contains("animateThree")) {
        item.classList.contains("animateThreeCum")
          ? item.classList.remove("animateThreeCum")
          : item.classList.add("animateThreeCum");
      } else if (item.classList.contains("animateFour")) {
        item.classList.contains("animateFourCum")
          ? item.classList.remove("animateFourCum")
          : item.classList.add("animateFourCum");
      }
    });
  };

  const handleHideSidebar = () => {
    const showNavOnMobile = document.getElementById("NavOnMobile");
    const AnimatedNavLink = document.querySelectorAll(".NavOnMobileCons");
    const myNav = document.getElementById("myNav");
    const banner = document.getElementById(" banner-container ");

    document.body.style.overflow = "scroll";

    showNavOnMobile.classList.contains("showNavOnMobile")
      ? showNavOnMobile.classList.remove("showNavOnMobile")
      : showNavOnMobile.classList.add("showNavOnMobile");

    myNav.classList.contains("hideMyNav")
      ? myNav.classList.remove("hideMyNav")
      : myNav.classList.add("hideMyNav");

    banner.classList.contains("hidebanner-container")
      ? banner.classList.remove("hidebanner-container")
      : banner.classList.add("hidebanner-container");

    AnimatedNavLink.forEach((item) => {
      if (item.classList.contains("animateOne")) {
        item.classList.contains("animateOneCum")
          ? item.classList.remove("animateOneCum")
          : item.classList.add("animateOneCum");
      } else if (item.classList.contains("animateTwo")) {
        item.classList.contains("animateTwoCum")
          ? item.classList.remove("animateTwoCum")
          : item.classList.add("animateTwoCum");
      } else if (item.classList.contains("animateThree")) {
        item.classList.contains("animateThreeCum")
          ? item.classList.remove("animateThreeCum")
          : item.classList.add("animateThreeCum");
      } else if (item.classList.contains("animateFour")) {
        item.classList.contains("animateFourCum")
          ? item.classList.remove("animateFourCum")
          : item.classList.add("animateFourCum");
      }
    });
  };

  return (
    <Router>
      <div className="App">
        <div className="wrapper">
          <div className="banner" style={{ backgroundImage: `url(${img2})` }}>
            <div className="banner-wrapper"></div>

            <NavOnMobile handleHideSidebar={handleHideSidebar} />
            <Navbar handleSidebar={handleSidebar} />
            <Page1 />
          </div>
          <Page2 />
          <Page3
            property={property}
            display={display}
            displayMyLiTag={displayMyLiTag}
            handlePrevAndNext={handlePrevAndNext}
            handleClick={handleClick}
            handleAddProperty={handleAddProperty}
          />
          <Page4 />

          <UserImage.Provider value={fileUpload}>
            <UserdragEnter.Provider value={dragEnter}>
              <UserdragLeave.Provider value={dragLeave}>
                <UserdragOver.Provider value={dragOver}>
                  <UserfileDrop.Provider value={fileDrop}>
                    <UserBrowse.Provider value={handleBrowse}>
                      <FormPage
                        handleAmount={handleAmount}
                        handleCity={handleCity}
                        handleRoom={handleRoom}
                        handleState={handleState}
                        handleSubmit={handleSubmit}
                      />
                    </UserBrowse.Provider>
                  </UserfileDrop.Provider>
                </UserdragOver.Provider>
              </UserdragLeave.Provider>
            </UserdragEnter.Provider>
          </UserImage.Provider>
          <Testimonies
          // handleSwipeLeft={handleSwipeLeft}
          // handleSwipeRight={handleSwipeRight}
          // mapswipeData={mapswipeData}
          // handleTouchStart={handleTouchStart}
          // handleTouchMove={handleTouchMove}
          // handleTouchEnd={handleTouchEnd}
          // mapActive={mapActive}
          // handleCheck={handleCheck}
          />
          <Footer handleHomePage={handleHomePage} />
        </div>
      </div>
    </Router>
  );
}

export default App;
