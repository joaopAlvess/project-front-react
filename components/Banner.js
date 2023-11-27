import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import { Card, Col, Image, Row } from 'react-bootstrap';
import styles from '../styles/style.module.css';

const Banner = (props) => {

    return (
        <>
            <div className={styles.container}>
                <Image src="/images/restaurante2.jpg" layout="fill" objectFit="cover" />
            </div>
        </>
    )
}

export default Banner