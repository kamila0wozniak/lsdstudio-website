import React from 'react';
import styles from './Footer.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "react-bootstrap/Button";

export default function Footer() {
    return(
        <div className={styles.footer}>
            <div className={styles.section}>
                <div className={styles.firstSection}>
                    <div>
                        <h1>Kon</h1>
                        <h1>takt:</h1>
                    </div>
                    <div>
                        <p  className={styles.footerParagraph}>Privacy Notice Terms of use<br/>
                        Please, be informed, that the intellectual property rights to all the photos, designs and other materials on this Site belong to “LSD.STUDIO” .
                        You may request permission to use them by contacting us at: kontakt@lsdstudio.pl<br/>
                        COPYRIGHT 2022. ALL RIGHTS RESERVED</p>
                        </div>
                </div>
            </div>
            <div className={styles.section}>
                <div className={styles.secondSection}>
                    <div className={styles.adress}>
                        <h2>LSD.STUDIO</h2>
                        <p className={styles.footerParagraph}>
                            ul.Składowa 22, 30-010 Kraków <br/>
                            t: (+48)12 333 44 80<br/>
                            @: kontakt@lsdstudio.pl
                        </p>
                    </div>
                    <div className={styles.button}>
                        <Button className={styles.button} variant="outline-dark">kontakt</Button>
                    </div>
                    <div className={styles.icons}>
                    </div>
                </div>
            </div>
        </div>
    )
}
