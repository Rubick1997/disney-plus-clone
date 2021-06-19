import React from 'react'
import ImageSlider from '../ImageSlider';
import styles from "./styles.module.css";
import Viewers from '../Viewers';
function Home() {
    return (
        <main className={styles.container}>
            <ImageSlider/>
            <Viewers/>
        </main>
    )
}

export default Home
