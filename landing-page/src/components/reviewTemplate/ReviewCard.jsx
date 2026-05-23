import React from 'react'
import Image from 'next/image'
import styles from './reviewCard.module.css'

function ReviewCard(props) {
    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <Image
                    src={props.imagePath}
                    alt={props.name}
                    width={42}
                    height={42}
                    className={styles.avatar}
                />
                <div>
                    <h3>{props.name}</h3>
                    <Image
                        src="/stars.png"
                        alt="Five star rating"
                        width={78}
                        height={11}
                        className={styles.stars}
                    />
                </div>
            </div>
            <p>{props.review}</p>
        </div>
    )
}

export default ReviewCard
