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
  const { dispMenuButton, setDestionationStatus, setBgChanger } =
    useGlobalContext();

  return (
    <>
      <nav className="nav">
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>

        <div className="styled_line"></div>

        <div className="links" id="navLinks">
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            to="/"
          >
            <strong>00</strong> Home
          </NavLink>

          <NavLink
            to="destination"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            onClick={() => {
              setDestionationStatus(0);
              setBgChanger("../assets/$/background-destination-desktop.jpg");
            }}
          >
            <strong>01</strong> Destination
          </NavLink>

          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            to="crew"
            onClick={() => {
              setDestionationStatus(0);
            }}
          >
            <strong>02</strong> Crew
          </NavLink>

          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            to="technology"
            onClick={() => {
              setDestionationStatus(0);
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
    </>
  );
}

export default Nav;
