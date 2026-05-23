import React from 'react'
import Template from '../SellingTemplate/Template'
import styles from './selling.module.css'

function Selling() {
    return (
        <section className={styles.selling}>
            <h1>Our Top Selling</h1>
            <div className={styles.grid}>
                <Template path="/plant4.png" title="Calathea plant" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit" price="Rs. 359/-" />
                <Template path="/plant2.png" title="Calathea plant" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit" price="Rs. 359/-" />
                <Template path="/plant5.png" title="Calathea plant" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit" price="Rs. 359/-" />
                <Template path="/plant6.png" title="Calathea plant" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit" price="Rs. 359/-" />
                <Template path="/plant7.png" title="Calathea plant" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit" price="Rs. 359/-" />
                <Template path="/plant8.png" title="Calathea plant" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit" price="Rs. 359/-" />
            </div>
        </section>
    )
}

export default Selling
