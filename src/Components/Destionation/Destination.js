import React, { useState } from "react";
import "../../scss/index.css";

import { useGlobalContext } from "../Context/Context";
import DestinationSubNav from "./DestinationSubNav";
export default function Destination() {
  const { dataInfo, destionationStatus } = useGlobalContext();

  const [activeBorder, setActiveBorder] = useState(null);

  const Description = () =>
    dataInfo.map((e, i) => {
      const { name, images, description, distance, travel, id } =
        e.destinations[destionationStatus];

      const imageSrc = images.png;
      return (
        <div key={id}>
          <div className="sectionIntro">
            <h5 className="barlow-reg">01</h5>
            <p className="barlow-reg">PICK YOUR DESTINATION </p>
          </div>
          <div className="destinationFlexContainer" key={id}>
            <img
              className="planetImg"
              key={name}
              src={imageSrc}
              alt={e.crew[destionationStatus].name}
            />
            <article className="description">
              <DestinationSubNav
                activeBorder={activeBorder}
                setActiveBorder={setActiveBorder}
                name={name}
              />

              <h2 className="belfair-2xl">{name}</h2>
              <p className="barlow-sm">{description}</p>

              <div className="whiteLine"></div>
              <div className="subDescription">
                <div>
                  <p className="barlow-xs">Avg. Distance</p>
                  <h5 className="belfair-reg">{distance}</h5>
                </div>

                <div>
                  <p className="barlow-xs">Est. Travel Time</p>
                  <h5 className="belfair-reg">{travel}</h5>
                </div>
              </div>
            </article>
          </div>
        </div>
      );
    });

  return (
    <section className="destination">
      <Description />
    </section>
  );
}
