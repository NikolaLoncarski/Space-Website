import React from "react";
import "../../scss/index.css";
import Logo from "../../assets/shared/logo.svg";
import { NavLink, Outlet } from "react-router-dom";
import { useGlobalContext } from "../Context/Context";

function Nav() {
  let activeStyle = {
    borderBottom: "2px solid #fff",
  };
  const { setDestionationStatus, setBackground } = useGlobalContext();

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
              setBackground(
                "url(../assets/destination/background-destination-desktop.jpg)"
              );
            }}
          >
            <strong>01</strong> Destination
          </NavLink>

          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            to="crew"
            onClick={() => {
              setDestionationStatus(0);
              setBackground("url(../assets/crew/background-crew-desktop.jpg");
            }}
          >
            <strong>02</strong> Crew
          </NavLink>

          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            to="technology"
            onClick={() => {
              setBackground("url(../assets/crew/background-crew-desktop.jpg");
              setDestionationStatus(0);
            }}
          >
            <strong>03</strong> Technology
          </NavLink>
        </div>
      </nav>

      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Nav;
