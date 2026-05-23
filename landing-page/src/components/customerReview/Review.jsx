import React from 'react'
import ReviewCard from '../reviewTemplate/ReviewCard'
import styles from './review.module.css'

function Review() {
    return (
        <section className={styles.review}>
            <h1>Customer Review</h1>
            <div className={styles.grid}>
                <ReviewCard imagePath="/person2.jpg" name="Maxn Raval"
                    review="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"
                />
                <ReviewCard imagePath="/person3.jpg" name="venely k"
                    review="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"
                />
                <ReviewCard imagePath="/person4.jpg" name="Lii thakur"
                    review="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"
                />
            </div>
        </section>
    )
}

export default Review
