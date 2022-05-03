import React from 'react';
import styles from './HomePageFirstSection.module.css'
import Button from 'react-bootstrap/Button';

export default function homePageFirstSection() {
    return(
        <div className={styles.background}>
            <div className={styles.boxInside}>
                <div className={styles.textSection}>
                    <div className={styles.cube}>
                        <h4>lsd.studio</h4>
                        <h5>to zespół kompetentnych specjalistów zajmujących sie projektowaniem i realizacją wnętrz.</h5>
                        <p>Doświadczenie dotyczące funkcjonowania marek wykorzystujemy w przygotowaniu skutecznych strategii projektowych, które w oparciu o aktualne trendy - pozwalają wyprzedzić konkurencję. Wieloletnia obecność na rynku oraz imponująca ilość zrealizowanych projektów – to kapitał, gwarantujący profesjonalną obsługę na każdym etapie realizacji procesu inwestycyjnego.</p>
                    </div>
                    <div>
                        <h4>lsd.studio</h4>
                        <h5>to kompleksowa obsługa dowolnej inwestycji.</h5>
                        <p>Nasze studio oferuje wsparcie podczas całego procesu przebiegu inwestycji: od autorskiego projektu koncepcyjnego, przez wielobranżowy projekt wykonawczy, aż po całościową realizację „pod klucz”. Precyzyjnie przeprowadzony proces projektowy, poprzedzony wnikliwą analizą potrzeb i możliwości klienta, skuteczna realizacja założeń w dowolnym obszarze: od prac budowlanych i instalacyjnych aż po produkcję wyposażenia – wszystko to oferujemy w ramach kompleksowej obsługi inwestycji.</p>
                    </div>
                    <div>
                        <h4>lsd.studio</h4>
                        <h5>to gwarancja najwyższej jakości.</h5>
                        <p>Najlepszym potwierdzeniem naszego doświadczenia i wysokich kompetencji są zdobyte nagrody. Nasze projekty wielokrotnie zostały docenione przez specjalistów z branży, zdobywając wiele prestiżowych nagród i wyróżnień.</p>
                    </div>
                </div>
                <div className={styles.buttonSection}>
                    <Button variant="outline-dark">Discover Now</Button>
                </div>

            </div>
        </div>
    )
}
