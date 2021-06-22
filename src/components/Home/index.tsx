import React, { useEffect } from "react";
import ImageSlider from "../ImageSlider";
import styles from "./styles.module.css";
import Viewers from "../Viewers";
import Content from "../Content";

function Home() {

  useEffect(() => {
    
  }, []);

  return (
    <main className={styles.container}>
      <ImageSlider />
      <Viewers />
      <Content/>
    </main>
  );
}

export default Home;
