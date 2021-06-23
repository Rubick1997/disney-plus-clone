import React from "react";
import styles from "./styles.module.css";
import cx from "classnames"
function Viewers() {
  const images = [
    {
      service: "disney",
      src: "https://prod-ripcut-delivery.disney-plus.net/v1/rawFiles/disney/RAW_C061B00E543326DA345FBF996B4D3D76422B58A49FDEE9AD9A2664618619A8F9",
    },
    {
      service: "pixar",
      src: "https://prod-ripcut-delivery.disney-plus.net/v1/rawFiles/disney/RAW_92FA84DF0F5D951171B41E5947716ADA382A15AE5DA37869E9D592D043F49316",
    },
    {
      service: "marvel",
      src: "https://prod-ripcut-delivery.disney-plus.net/v1/rawFiles/disney/RAW_B8F3C4DDB037CD1840A53BDFA0AA0504E9FDDE7781D62D28230D5C74F2B06624",
    },
    {
      service: "starwars",
      src: "https://prod-ripcut-delivery.disney-plus.net/v1/rawFiles/disney/RAW_59F432D7A600A8F1CE36AE4D0B96570AC7C8277A0E8855BC06FABBAE090E6577",
    },
    {
      service: "national",
      src: "https://prod-ripcut-delivery.disney-plus.net/v1/rawFiles/disney/RAW_16793CC7E2AF7B8687B0DD00673503CBC14CB2C801952D62B4551B6866073650",
    },
  ];
  return (
    <div className={styles.container}>
      {images.map((item) => (
        <div className={styles.item}>
          <div className={styles.wrap}>
            <img
              src={`/img/viewers-${item.service}.png`}
              alt={`viewers-${item.service}`}
              className={styles.img1}
            />
            <img src={item.src} alt="" className={cx(styles.img2,styles.img1)} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Viewers;
