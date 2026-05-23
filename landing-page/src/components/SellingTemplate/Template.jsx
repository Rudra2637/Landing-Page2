import Image from 'next/image'
import React from 'react'
import styles from './template.module.css'

function Template(props) {
    return (
        <article className={styles.card}>
            <div className={styles.imageWrap}>
                <Image
                    src={props.path}
                    alt={props.title}
                    width={220}
                    height={220}
                    className={styles.plantImage}
                />
            </div>
            <h2>{props.title}</h2>
            <p className={styles.description}>{props.description}</p>
            <div className={styles.footer}>
                <p>{props.price}</p>
                <button aria-label="Add to cart">
                    <Image src="/bag.png" alt="" height={18} width={18} />
                </button>
            </div>
        </article>
    )
}

export default Template
