import React from "react";
import "../../scss/index.css";
import Logo from "../../assets/shared/logo.svg";
import { NavLink, Outlet } from "react-router-dom";
import { useGlobalContext } from "../Context/Context";
import SlideMenu from "./SlideMenu";
function Nav() {
  let activeStyle = {
    borderBottom: "2px solid #fff",
  };
  const {
    resetPage,
    destionationStatus,
    setDestinationStatus,
    setBgChanger,
    bgChanger,
  } = useGlobalContext();

  return (
    <div className={`background-${bgChanger}`}>
      <nav className="nav">
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>

        <div className="styled_line"></div>

        <div className="links" id="navLinks">
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            to="/"
            onClick={() => {
              resetPage();
              setBgChanger("home");
            }}
          >
            <strong>00</strong> Home
          </NavLink>

          <NavLink
            to="destination"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            onClick={() => {
              if (destionationStatus === 3) {
                setDestinationStatus();
              }
              setBgChanger("destination");
            }}
          >
            <strong>01</strong> Destination
          </NavLink>

          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            to="crew"
            onClick={() => {
              if (destionationStatus === 3) {
                setDestinationStatus(0);
              }
              setBgChanger("crew");
            }}
          >
            <strong>02</strong> Crew
          </NavLink>

          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            to="technology"
            onClick={() => {
              if (destionationStatus >= 3) {
                setBgChanger("technology");
                setDestinationStatus(0);
              }
              setBgChanger("technology");
            }}
          >
            <strong>03</strong> Technology
          </NavLink>
        </div>
        <SlideMenu />
      </nav>

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Nav;
