import React from 'react';
import styles from './HomePageProjects.module.css'
import Button from 'react-bootstrap/Button';

export default function homePageProjects() {
    return(
        <div className={styles.background}>
            <div className={styles.boxInside}>
                <div className={styles.textSection}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer consequat leo ut ornare ultrices. Vivamus lacinia tortor mauris, sit amet interdum mi congue eget. Morbi dictum ipsum purus, sit amet feugiat est sagittis vel. Morbi euismod efficitur justo, nec lobortis mauris pharetra vel. Integer eu nisl metus. Nunc lorem velit, dapibus at quam non, facilisis faucibus velit. Duis eu hendrerit purus. Praesent scelerisque lorem eget enim blandit rutrum. Sed vitae nulla libero.
                    Quisque vehicula pretium pretium. </p>
                    <Button className={styles.button} variant="outline-primary">Zobacz Projekty</Button></div>
                <div className={styles.picSection}></div>
            </div>
        </div>
    )
}
