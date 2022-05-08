import React from 'react';
import styles from './HomePageThirdSection.module.css'
import Button from "react-bootstrap/Button";

export default function HomePageThirdSection() {
    return(
        <div className={styles.background}>
            <div className={styles.section}>
                <div className={styles.hugeTextSection}>
                    <p className={styles.hugeTextParagraph}>Wykreujmy</p>
                    <p className={styles.hugeTextParagraph}>razem coś!</p>
                    <p className={styles.hugeTextParagraph}>wyjątkowego</p>
                </div>
            </div>
            <div className={styles.section}>
                <div className={styles.textSection}>
                    <h5>Zapraszamy do kontaktu</h5>
                    <p className={styles.paragraph}>
                        Chętnie podzielimy się naszą wiedzą, doświadczeniem i wizją estetyczną - zabierając Cię w podróż po wyjątkowym świecie możliwości LSD.STUDIO.
                    </p>
                    <div className={styles.buttonSection}>
                        <Button className={styles.button} variant="outline-dark">Wyślij zapytanie</Button>
                    </div>
                </div>
               </div>

        </div>
    )
}
