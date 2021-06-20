import React from "react";
import ImageSlider from "../ImageSlider";
import styles from "./styles.module.css";
import Viewers from "../Viewers";
import Movies from "../Movies";

function Home() {
  return (
    <main className={styles.container}>
      <ImageSlider />
      <Viewers />
      <Movies />
    </main>
  );
}

export default Home;
