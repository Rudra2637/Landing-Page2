import React from 'react'
import Image from 'next/image'
import styles from './footer.module.css'

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.brandColumn}>
                <div className={styles.brand}>
                    <Image
                        src="/plant.png"
                        alt="Planto logo"
                        width={60}
                        height={60}
                        className={styles.logo}
                    />
                    <h2>Planto.</h2>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div className={styles.socials}>
                    <span>FB</span>
                    <span>TW</span>
                    <span>LI</span>
                </div>
            </div>

            <nav className={styles.linksColumn} aria-label="Footer navigation">
                <h3>Quick Link&apos;s</h3>
                <a href="#">Home</a>
                <a href="#">Type&apos;s Of plant&apos;s</a>
                <a href="#">Contact</a>
                <a href="#">Privacy</a>
            </nav>

            <div className={styles.subscribeColumn}>
                <h3>For Every Update.</h3>
                <form className={styles.form}>
                    <input type="email" placeholder="Enter Email" aria-label="Email address" />
                    <button type="submit">SUBSCRIBE</button>
                </form>
                <p className={styles.copy}>planto © all right reserve</p>
            </div>
        </footer>
    )
}

export default Footer
