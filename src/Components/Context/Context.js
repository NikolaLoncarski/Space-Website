import React, { useContext, useState, useEffect, useCallback } from "react";
import Data from "../../data.json";

const dataInfo = [Data];
const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [pageStatus, setPageStatus] = useState(0);
  const [status, setStatus] = useState();
  const [dispMenuButton, setDispMenuButton] = useState(false);
  const [bgChanger, setBgChanger] = useState("home");

  /// page rendering switch case ,checks for status in the code and renders on page depending of that
  const filterSatusHandler = useCallback(() => {
    switch (status) {
      case "Moon":
      case "Douglas Hurley":
      case "Launch vehicle":
        setPageStatus(0);
        break;
      case "Mars":
      case "Mark Shuttleworth":
      case "Spaceport":
        setPageStatus(1);
        break;
      case "Europa":
      case "Victor Glover":
      case "Space capsule":
        setPageStatus(2);
        break;
      case "Titan":
      case "Anousheh Ansari":
        setPageStatus(3);
        break;
      default:
        setPageStatus(0);

        break;
    }
  }, [status]);

  useEffect(() => {
    filterSatusHandler();
  }, [filterSatusHandler]);

  return (
    <AppContext.Provider
      value={{
        dataInfo,
        pageStatus,
        setStatus,
        dispMenuButton,
        setDispMenuButton,

        setBgChanger,
        bgChanger,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};
