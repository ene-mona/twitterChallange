import "maplibre-gl/dist/maplibre-gl.css";
import * as React from "react";
import countryData from "./data/Countries.json";
import capitalData from "./data/Capitals.json";
import { useRef, useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import marker from "../images/map-marker.png";
import L from "leaflet";

const icon = L.icon({
  iconUrl: marker,
  iconSize: [35, 45],
});

const MyMap = () => {
  const country = useRef("country");
  const [center, setCenter] = useState({ lat: 8, lng: 10 });
  const [popup, setPopup] = useState("Nigeria");
  const [capital, setCapital] = useState("Capital");
  const caps = useRef(country); // capitalize input field

  let countrySearch = countryData.ref_country_codes; // country data with country name, latiude and longitude found in countries.json
  let capitalSearch = capitalData.capitals; // diffrent data showing countries with their capitals found in capitals.json

  // countrySearch.map((x, y) => {
  //   console.log(x.country);
  // });
  // capitalSearch.map((w, z) => {
  //   console.log(w.country);
  // });

  document.addEventListener("click", toRemoveEvents);

  function toRemoveEvents(e) {
    if (
      !(
        e.target.classList.contains("disable") ||
        e.target.classList.contains("control")
      )
    ) {
      document.getElementById("icon").classList.add("fa-chevron-down");
      document.getElementById("select").classList.remove("select-shown");
    }
    if (
      !(
        e.target.classList.contains("arrowDown") ||
        e.target.classList.contains("country-control")
      )
    ) {
      document.getElementById("arrowCon").classList.add("fa-chevron-down");
      document
        .getElementById("country-select")
        .classList.remove("select-shown");
    }
  }
  // map through country data to get their names
  function countries() {
    return capitalSearch.map((x, ind) => {
      const { country } = x;
      return (
        <li className="text-wrap" onClick={handleCountries}>
          <img className="marker-mage" src={marker} alt="marker" />
          <option className="text-wrap" value={country}>
            {country}
          </option>
        </li>
      );
    });
  }
  // controls visibility for selection of countries
  const handleSelectCountry = (e) => {
    document.getElementById("arrowCon").classList.toggle("fa-chevron-down");

    if (e.target.classList.contains("controls")) {
      document
        .getElementById("country-select")
        .classList.toggle("select-shown");
    }
    if (e.target.classList.contains("arrowDown")) {
      document
        .getElementById("country-select")
        .classList.toggle("select-shown");
    }
  };
  // onclick of a specific country, it gives you its capital and shows its location on the map
  const handleCountries = (e) => {
    document.getElementById("arrowCon").classList.toggle("fa-chevron-up");
    if (e.target.classList.contains("marker-mage")) {
      country.current = e.target.nextElementSibling.innerHTML;
    } else {
      country.current = e.target.value;
    }
    document.getElementById("country-select").classList.toggle("select-shown");
    let exactCapital = capitalSearch.filter(
      (exact, ind) => exact.country === country.current
    );
    if (exactCapital.length !== 0) {
      setCapital(exactCapital[0].capital);
    }
  };

  // mapping through capital data to easily sort them before ouputing

  const mapCapsArray = () => {
    return capitalSearch.map((x, y) => {
      const { capital } = x;
      return capital;
    });
  };
  // sorting of the above

  let sortMapCapsArray = mapCapsArray();
  sortMapCapsArray = sortMapCapsArray.sort();

  // mapping through sorted capital data to easily output them for selection

  function capitals() {
    return sortMapCapsArray.map((state, ind) => {
      return (
        <li className="text-wrap" onClick={handleStates}>
          <img className="marker-mage" src={marker} alt="marker" />
          <option className="text-wrap" value={state}>
            {state}
          </option>
        </li>
      );
    });
  }
  // for selection of a capital to the input field
  const handleStates = (e) => {
    if (e.target.classList.contains("marker-mage")) {
      setCapital(e.target.nextElementSibling.innerHTML);
    } else {
      setCapital(e.target.value);
    }
    document.getElementById("select").classList.toggle("select-shown");
  };

  capitals();
  countries();

  // this function is responsible for input a country from the selection of a capital to the input field
  let checkCountryFromCapital = () => {
    if (capital) {
      let exactCountry = capitalSearch.filter(
        (exact, ind) => exact.capital === capital
      );
      if (exactCountry.length !== 0) {
        // setCountry(exactCountry[0].country);
        country.current = exactCountry[0].country;
        // return exactCountry[0].country;
      }
    }
  };
  checkCountryFromCapital();
  // controls visibility for selection of capitals

  const handleSelect = (e) => {
    document.getElementById("icon").classList.toggle("fa-chevron-down");

    if (e.target.classList.contains("control")) {
      document.getElementById("select").classList.toggle("select-shown");
    }
    if (e.target.classList.contains("disable")) {
      document.getElementById("select").classList.toggle("select-shown");
    }
  };

  // function for text capitilazation in input field
  if (country) {
    function capitalize() {
      return country.current.replace(/\b[a-z]/gi, function (char) {
        return char.toUpperCase();
      });
    }
    caps.current = capitalize();
  }
  // for location movement on map
  let handleSearch = (e) => {
    e.preventDefault();

    let specificCountry = countrySearch.filter(
      (x, y) => x.country === caps.current
    );
    if (specificCountry.length !== 0) {
      setCenter("");
      setPopup(specificCountry[0].country);
      setCenter({
        lat: specificCountry[0].latitude,
        lng: specificCountry[0].longitude,
      });
    }
  };

  // sets center view for different location on the map
  function ResetCenterView() {
    const map = useMap();

    useEffect(() => {
      if (center) {
        map.setView(L.latLng(center?.lat, center?.lng), map.getZoom(), {
          animate: true,
        });
      }
    }, [map]);
  }

  return (
    <div>
      <div className="map-wraPper">
        <>
          <MapContainer
            center={center}
            zoom={4}
            scrollWheelZoom={false}
            style={{ width: "100%", height: "100%" }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=hzZHo1os8Ha4gzjlUJhM"
            />
            <Marker position={center} icon={icon}>
              <Popup>{popup}</Popup>
            </Marker>
            <ResetCenterView setCenter={center} />
          </MapContainer>
        </>
      </div>

      <div className="input-area">
        <form type="submit" className="group-input" id="group-input">
          <div className="all-type" onClick={handleSelectCountry}>
            <input
              id="pac-input"
              className="controls country-control"
              type="text"
              placeholder="Country"
              value={country.current}
              readOnly
            />
            <i
              id="arrowCon"
              class="fa-solid fa-chevron-down fa-chevron-up arrowDown"
            ></i>
            <div id="country-select" className="country-select">
              <div className="country-list">{countries()}</div>
            </div>
          </div>
          <div className="neighbor" onClick={handleSelect}>
            <input
              id=""
              className=" control"
              placeholder="Country"
              readOnly
              value={capital}
            />

            <i
              id="icon"
              class="fa-solid fa-chevron-down fa-chevron-up disable"
            ></i>
            <div id="select" className="select">
              <div className="selest-list">{capitals()}</div>
            </div>
          </div>

          <i
            class="fa-solid fa-magnifying-glass"
            onClick={(e) => handleSearch(e)}
          ></i>
        </form>
      </div>
    </div>
  );
};

export default MyMap;
