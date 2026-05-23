import Image from 'next/image'
import React from 'react'
import styles from './trendy.module.css'

function Trendy(props) {
    return (
        <article className={`${styles.card} ${props.reverse ? styles.reverse : ''}`}>
            <div className={styles.imageWrap}>
                <Image
                    src={props.path}
                    alt={props.title}
                    width={320}
                    height={320}
                    className={styles.plantImage}
                />
            </div>
            <div className={styles.content}>
                <h3>{props.title}</h3>
                <p className={styles.description}>{props.description}</p>
                <p className={styles.price}>{props.price}</p>
                <div className={styles.actions}>
                    <button>Explore</button>
                    <button className={styles.bagButton} aria-label="Add to cart">
                        <Image src="/bag.png" alt="" width={18} height={18} />
                    </button>
                </div>
            </div>
        </article>
    )
}

export default Trendy
