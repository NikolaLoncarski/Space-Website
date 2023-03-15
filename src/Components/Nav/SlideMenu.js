// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import HamMenu from "../../assets/shared/icon-hamburger.svg";
// import styles from "../../scss/slidemenu.module.scss";
// function SlideMenu() {
//   const [dispMenuButton, setDispMenuButton] = useState(true);

//   const openMenuHandler = () => {
//     if (dispMenuButton === true) {
//       const rootEl = document.getElementById("root");
//       const navMenu = document.getElementById("navLinks");
//       const slideInMenu = document.createElement("div");

//       slideInMenu.classList.add("styles.hamMenu");

//       rootEl.appendChild(slideInMenu);
//       slideInMenu.appendChild(navMenu);
//       navMenu.style.display = "unset";
//       console.log(slideInMenu);
//     } else {
//       console.log("failure");
//     }
//   };

//   return (
//     <>
//       <img
//         onClick={openMenuHandler}
//         className={styles.hamMenu}
//         src={HamMenu}
//         alt="Hamburger Menu Icon"
//       />
//     </>
//   );
// }

// export default SlideMenu;
