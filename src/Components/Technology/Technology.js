import React, { useState, useEffect } from "react";
import "../../scss/index.css";
import { useGlobalContext } from "../Context/Context";
import TechnologyBuble from "./TechnologyBuble";

export default function Technology() {
  const { dataInfo, pageStatus, setBgChanger } = useGlobalContext();
  const [activeDot, setActiveDot] = useState(null);
  const [windowSize, setWindowSize] = useState([window.innerWidth]);

  /// reads screen width every time it changes
  useEffect(() => {
    setBgChanger("technology");
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth]);
    };
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  const Description = () =>
    dataInfo.map((e) => {
      const { name, images, description, id } = e.technology[pageStatus];
      let imageSrc = images.portrait;
      if (windowSize <= 768) {
        /// checks for screen width and renders image in the text at an aprtopriate width
        imageSrc = images.landscape;
      }

      return (
        <div key={id}>
          <div className="sectionIntro">
            <h5 className="barlow-reg">03</h5>
            <p className="barlow-reg">SPACE LAUNCH 101</p>
          </div>
          <div className="flexTechnology" key={id}>
            <div className="techInfo">
              <TechnologyBuble
                activeDot={activeDot}
                setActiveDot={setActiveDot}
                name={name}
              />
              <article className="techDetails">
                <p className="barlow-xs">THE TECHNOLOGY</p>
                <h3 className="belfair-xl">{name}</h3>
                <p className="barlow-sm">{description}</p>
              </article>
            </div>

            <img
              className="planetImg"
              src={imageSrc}
              alt={e.technology[pageStatus].name}
            />
          </div>
        </div>
      );
    });

  return (
    <section className="tech">
      <Description />
    </section>
  );
}
