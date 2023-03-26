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
  const { pageStatus, setPageStatus, setBgChanger, bgChanger } =
    useGlobalContext();

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
              setBgChanger("home");
            }}
          >
            <strong>00</strong> Home
          </NavLink>

          <NavLink
            to="destination"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            onClick={() => {
              if (pageStatus === 3) {
                setPageStatus();
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
              if (pageStatus === 3) {
                setPageStatus(0);
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
              if (pageStatus >= 3) {
                setBgChanger("technology");
                setPageStatus(0);
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
