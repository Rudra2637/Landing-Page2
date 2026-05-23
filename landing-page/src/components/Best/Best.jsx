import React from 'react'
import Image from 'next/image'
import styles from './best.module.css'

function Best() {
    return (
        <section className={styles.best}>
            <h1>Our best o2</h1>
            <div className={styles.card}>
                <div className={styles.imageWrap}>
                    <Image
                        src="/plant1.png"
                        alt="Calathea plant"
                        width={460}
                        height={460}
                        className={styles.plantImage}
                    />
                </div>
                <div className={styles.content}>
                    <h2>We Have Small And Best O2 Plants Collection&apos;s</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                    <div className={styles.controls}>
                        <button>Explore</button>
                        <div className={styles.slider}>
                            <span className={styles.arrow}>‹</span>
                            <span className={styles.count}>01/04</span>
                            <span className={styles.arrow}>›</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.dots}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </section>
    )
}

export default Best
