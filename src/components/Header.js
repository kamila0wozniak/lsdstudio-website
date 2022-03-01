import React from 'react';
import logo from "../img/logoClear.svg";
import styles from "./Header.module.css";

export default function Header() {
    return(
        <div className={styles.header}>
            <div className={styles.headerArragement}>
                <div className={styles.textBox}>
                    <h1>lsd studio</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer consequat leo ut ornare ultrices. Vivamus lacinia tortor mauris, sit amet interdum mi congue eget. Morbi dictum ipsum purus, sit amet feugiat est sagittis vel. Morbi euismod efficitur justo, nec lobortis mauris pharetra vel. Integer eu nisl metus. Nunc lorem velit, dapibus at quam non, facilisis faucibus velit.</p>
                </div>
                <img src={logo} alt="Logo" className={styles.headerLogo}/>
            </div>

        </div>
    )
}
