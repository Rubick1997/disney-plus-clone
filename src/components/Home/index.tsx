import React from 'react'
import ImageSlider from '../ImageSlider';
import styles from "./styles.module.css";

function Home() {
    return (
        <main className={styles.container}>
            <ImageSlider/>
        </main>
    )
}

export default Home
