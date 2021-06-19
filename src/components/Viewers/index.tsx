import React from "react";
import styles from "./styles.module.css";

function Viewers() {
  const images = [
    { service: "disney" },
    { service: "pixar" },
    { service: "marvel" },
    { service: "starwars" },
    { service: "national" },
  ];
  return (
    <div className={styles.container}>
      {images.map((item) => (
        <div className={styles.wrap}>
          <img src={`/img/viewers-${item.service}.png`} alt={`viewers-${item.service}`} />
        </div>
      ))}
    </div>
  );
}

export default Viewers;
