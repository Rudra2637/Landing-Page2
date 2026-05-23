import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './header.module.css'

function Header() {
    //components for header to display in list 

    return (
        <nav className={styles.navbar}>
            <div className={styles.brand}>
                <Image
                    src="/plant.png"
                    alt="logo"
                    width={42}
                    height={42}
                    className={styles.logo}
                />

                <p className={styles.brandName}>Planto.</p>
            </div>

            <div className={styles.linksWrap}>
                <ul className={styles.links}>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="#plant-types">
                            Plant Types<span className={styles.chevron}></span>
                        </Link>
                    </li>
                    <li>
                        <Link href="">More</Link>
                    </li>
                    <li>
                        <Link href="/#contact">Contact</Link>
                    </li>
                </ul>
            </div>

            <div className={styles.actions}>
                <button className={styles.iconButton} aria-label="Search">
                    <Image
                        src="/search.png"
                        alt=""
                        width={24}
                        height={24}
                    />
                </button>
                <button className={styles.iconButton} aria-label="Cart">
                    <Image
                        src="/bag.png"
                        alt=""
                        width={24}
                        height={24}
                    />
                </button>
                <button className={styles.menuButton} aria-label="Open menu">
                    <span></span>
                    <span></span>
                </button>
            </div>
        </nav>
    )
}

export default Header
