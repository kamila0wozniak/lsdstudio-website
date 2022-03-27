import React from 'react'
import styles from './HomePage.module.css'
import Footer from "./Footer";
import Header from "./Header"
import HomePageFirstSection from "./HomePageFirstSection";
import HomePageSecondSection from "./HomePageSecondSection";
import HomePageThirdSection from "./HomePageThirdSection";


export default function HomePage() {
    return(
        <div className={styles.homepage}>
            <Header />
            <div className={styles.background}>
                    <HomePageFirstSection />
                    <HomePageSecondSection />
                    <HomePageThirdSection />
                </div>
            <Footer/>
        </div>
    )
}
