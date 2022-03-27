import React from 'react';
import styles from './HomePageFirstSection.module.css'
import Button from 'react-bootstrap/Button';

export default function homePageFirstSection() {
    return(
        <div className={styles.background}>
            <div className={styles.boxInside}>
                <div className={styles.picSection}>abc</div>
                <div className={styles.textSection}>
                    <h2>Heading</h2>
                    <p className={styles.pColour}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer consequat leo ut ornare ultrices. Vivamus lacinia tortor mauris, sit amet interdum mi congue eget. Morbi dictum ipsum purus, sit amet feugiat est sagittis vel. Morbi euismod efficitur justo, nec lobortis mauris pharetra vel. Integer eu nisl metus. Nunc lorem velit, dapibus at quam non, facilisis faucibus velit. Duis eu hendrerit purus. Praesent scelerisque lorem eget enim blandit rutrum. Sed vitae nulla libero.
                    Quisque vehicula pretium pretium. </p>
                    <Button className={styles.button} variant="outline-primary">Zobacz Więcej</Button></div>

            </div>
        </div>
    )
}
