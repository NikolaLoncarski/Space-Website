import React, { useState } from "react";

import HamMenu from "../../assets/shared/icon-hamburger.svg";
import CloseMenu from "../../assets/shared/icon-close.svg";
function SlideMenu() {
  const [dispMenuButton, setDispMenuButton] = useState(false);

  const navSlideHandler = () => {
    document.querySelector(".links").style.display = "flex";
    setDispMenuButton(!dispMenuButton);
  };

  return (
    <>
      {!dispMenuButton ? (
        <img
          onClick={navSlideHandler}
          className="hamMenu"
          src={HamMenu}
          alt="Hamburger Menu Icon"
        />
      ) : (
        <img
          onClick={navSlideHandler}
          className="hamMenu"
          src={CloseMenu}
          alt="Hamburger Menu Icon"
        />
      )}
    </>
  );
}

export default SlideMenu;
