import React from 'react'
import styles from './Projects.module.css'
import Footer from "./Footer";


export default function Projects() {
    return(
        <div>
            <div className={styles.projectSection}>
                <div className={styles.blankArea}>
                    <p className={styles.blankAreaLetters}>projekty</p>
                </div>
                <div className={styles.linksArea}>
                    <div className={styles.linksAreaWidth}>
                        <a>wszystko</a>
                        <a>retail</a>
                        <a>gastro</a>
                        <a>biura</a>
                        <a>apartamenty</a>
                        <a>stoiska</a>
                    </div>

                </div>
                <div className={styles.projectsArea}>
                    <div className={styles.projectBox}>p</div>
                    <div className={styles.projectBox}>p</div>
                    <div className={styles.projectBox}>p</div>
                    <div className={styles.projectBox}>p</div>
                    <div className={styles.projectBox}>p</div>
                    <div className={styles.projectBox}>p</div>
                    <div className={styles.projectBox}>p</div>
                    <div className={styles.projectBox}>p</div>
                    <div className={styles.projectBox}>p</div>
                    <div className={styles.projectBox}>p</div>
                    <div className={styles.projectBox}>p</div>
                    <div className={styles.projectBox}>p</div>

                </div>
            </div>
            <Footer/>
        </div>

    )
}
