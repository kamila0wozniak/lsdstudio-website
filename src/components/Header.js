import React from 'react';
import x from "../img/x.png";
import styles from "./Header.module.css";

export default function Header() {
    return(
        <div className={styles.header}>
            <div className={styles.headerArragement}>
                <div className={styles.textBox}>
                    <h1>Od ponad 10 lat<br /> jesteśmy solidnym wsparciem <br /> dla wielu polskich i zagranicznych marek.</h1>
                 </div>
                <img src={x} alt="Logo" className={styles.x}/>
            </div>

        </div>
    )
}
