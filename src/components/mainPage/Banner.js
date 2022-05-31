import React from 'react';
import styles from './Banner.module.css'
import banner from "../../images/banner.jpg"

const Banner = () => {
    return (
        <div className={styles.container}>
            <img src={banner} alt='banner' ></img>
            <div className={styles.textBanner}>
                {/* <h1>
                    Venarch Hand-Made Choco 
                </h1>
                <h1>
                    شکلات دست ساز ونارچ
                </h1> */}
            </div>
        </div>
    );
};

export default Banner;