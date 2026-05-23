import React from 'react'
import styles from './hero.module.css'
import Image from 'next/image'
import ReviewCard from '../reviewTemplate/ReviewCard'
import Trendy from '../TrendyPlants/Trendy'

function Hero() {

    return (
        <div className={styles.hero}>
            <section className={styles.topSection}>
                <div className={styles.content}>
                    <h1>Breath Natural</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div className={styles.actions}>
                        <button className={styles.exploreButton}>Explore</button>
                        <button className={styles.demoButton}>
                            <span className={styles.playIcon}>
                                <Image
                                    src="/Polygon 2.png"
                                    alt=""
                                    width={12}
                                    height={13}
                                />
                            </span>
                            <span>Live Demo...</span>
                        </button>
                    </div>
                </div>

                <div className={styles.productCard}>
                    <Image
                        src="/plant1.png"
                        alt="Calathea plant"
                        width={260}
                        height={260}
                        className={styles.productImage}
                        priority
                    />
                    <p className={styles.productLabel}>Trendy House Plant</p>
                    <h3>Calathea plant</h3>
                    <div className={styles.productFooter}>
                        <button>Buy Now</button>
                        <span className={styles.cardArrow}>{'>'}</span>
                    </div>
                    <div className={styles.dots}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>

                <ReviewCard imagePath="/person1.jpg" name="alena Patel"
                    review="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt..."
                />
            </section>

            <section className={styles.trendySection}>
                <h2>Our Trendy plants</h2>
                <Trendy
                    path="/plant2.png"
                    title="For Small Decs Ai Plat"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
                    price="Rs. 599/-"
                />
                <Trendy
                    path="/plant3.png"
                    title="For Fresh Decs Ai Plat"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
                    price="Rs. 579/-"
                    reverse
                />
            </section>
        </div>
    )
}

export default Hero
