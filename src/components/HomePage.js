import React from 'react'
import styles from './HomePage.module.css'
import Footer from "./Footer";
import Header from "./Header"
import Nagrody from "./Nagrody";
import HomePageProjects from "./HomePageProjects";


export default function HomePage() {
    return(
        <div className={styles.homepage}>
            <Header />
            <div className={styles.backgroundWaves}>
                <div className={styles.glassEfect}>
                    <HomePageProjects />
                    <Nagrody/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer consequat leo ut ornare ultrices. Vivamus lacinia tortor mauris, sit amet interdum mi congue eget. Morbi dictum ipsum purus, sit amet feugiat est sagittis vel. Morbi euismod efficitur justo, nec lobortis mauris pharetra vel. Integer eu nisl metus. Nunc lorem velit, dapibus at quam non, facilisis faucibus velit. Duis eu hendrerit purus. Praesent scelerisque lorem eget enim blandit rutrum. Sed vitae nulla libero.

                        Quisque vehicula pretium pretium. Pellentesque aliquet faucibus neque, eget venenatis nisi dictum quis. Fusce vehicula neque vel enim scelerisque sollicitudin. Pellentesque pulvinar orci diam, at vestibulum risus semper feugiat. Ut luctus mollis scelerisque. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas sit amet porttitor orci, quis malesuada lectus. Quisque non cursus eros. Sed placerat risus id arcu tristique, sit amet bibendum enim malesuada. Nam non nisl vel dui vulputate sodales. Ut rhoncus velit tellus, nec volutpat eros varius nec. In in facilisis est, nec aliquam purus. Aliquam sodales sem non orci euismod, a lacinia nisl mollis. Vestibulum neque ipsum, eleifend vitae justo sed, fermentum tincidunt velit. Duis rhoncus molestie metus nec congue. Etiam tristique facilisis tellus eu ornare.

                        In sit amet dui faucibus, semper elit non, sagittis magna. Duis in justo nec diam ultrices tristique. Fusce urna eros, hendrerit ut odio maximus, bibendum tempus massa. Vestibulum aliquam feugiat suscipit. Suspendisse et sapien pulvinar justo cursus rutrum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum non urna at nisl cursus auctor vel ut ipsum. Nunc suscipit libero diam, eu condimentum mi feugiat a.

                        Aenean fringilla, augue nec egestas luctus, neque arcu ultrices purus, ut luctus nunc ipsum bibendum sapien. Donec nulla nisi, dictum non lobortis euismod, elementum tristique nulla. In mollis ullamcorper ante, fermentum convallis justo euismod euismod. Sed posuere at lorem nec maximus. Integer ut mauris at enim scelerisque gravida. Cras placerat euismod felis id interdum. Cras sed tortor eget metus tincidunt ultricies a ut turpis. Curabitur vestibulum malesuada est sit amet dictum. Donec augue nisi, aliquam at facilisis vitae, sagittis id nulla. Maecenas eros sapien, sodales id ipsum ut, laoreet rutrum felis. Mauris vel enim turpis.

                        Curabitur id posuere nisl. Fusce ultricies placerat ornare. Nunc mattis, nisl et elementum bibendum, nisl lacus porttitor nunc, vitae mattis tortor nunc vitae ligula. Integer a augue nulla. Sed sagittis facilisis odio, at vestibulum nibh. Morbi ultrices sed mi ac dapibus. Fusce in erat eget libero accumsan tristique. Vivamus aliquam bibendum neque sed molestie. Vivamus sollicitudin orci ante, eget dignissim sem bibendum non. Integer fermentum nulla felis, sed feugiat ipsum lobortis a. Sed placerat elementum arcu eu fermentum.</p>
                    <p>home</p>
                </div>
                </div>



            <Footer/>
        </div>
    )
}
