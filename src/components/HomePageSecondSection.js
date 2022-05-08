import React from 'react';
import styles from './HomePageSecondSection.module.css'
import Button from "react-bootstrap/Button";

export default function HomePageSecondSection() {
    return(
        <div className={styles.background}>
            <div className={styles.section}>1</div>
            <div className={styles.section}>2</div>
            <div className={styles.section}>
                <div className={styles.buttonSection}>
                    <Button className={styles.button} variant="outline-dark">Discover Now</Button>
                </div>

            </div>
        </div>
    )
}
