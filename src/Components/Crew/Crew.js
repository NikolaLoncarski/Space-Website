import React, { useState } from "react";
import "../../scss/index.css";

import { useGlobalContext } from "../Context/Context";
import CrewDotNav from "./CrewDotNav";

export default function Crew() {
  const { dataInfo, destionationStatus } = useGlobalContext();

  const [activeDot, setActiveDot] = useState(null);

  const Description = () =>
    dataInfo.map((e, i) => {
      const { name, images, role, bio, id } = e.crew[destionationStatus];

      const imageSrc = images.png;

      return (
        <div key={id}>
          <div className="sectionIntro">
            <h5 className="barlow-reg"> 02</h5>
            <p className="barlow-reg">MEET YOUR CREW</p>
          </div>
          <div className="flexCrewSection">
            <article className="crewFlexContainer">
              <div className="crewInfo">
                <h4 className="belfair-lg"> {role}</h4>
                <h3 className="belfair-xl">{name}</h3>
                <p className="barlow-sm">{bio}</p>
              </div>
              <CrewDotNav
                activeDot={activeDot}
                setActiveDot={setActiveDot}
                name={name}
              />
            </article>
            <div className="imgContainer">
              <img src={imageSrc} alt={e.crew[destionationStatus].name} />
            </div>
          </div>
        </div>
      );
    });

  return (
    <section className="crewSection">
      <Description />
    </section>
  );
}
