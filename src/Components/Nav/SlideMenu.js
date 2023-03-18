import HamMenu from "../../assets/shared/icon-hamburger.svg";
import CloseMenu from "../../assets/shared/icon-close.svg";
import { useGlobalContext } from "../Context/Context";
function SlideMenu() {
  const { dispMenuButton, setDispMenuButton } = useGlobalContext();

  const navSlideHandler = () => {
    {
      !dispMenuButton
        ? (document.querySelector(".links").style.display = "flex")
        : (document.querySelector(".links").style.display = "none");
    }
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
