import styles from './top.module.scss';
import React from 'react'
import face from '../../../assets/winter/face.png'

export const Top = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.title_wrapper}>
                <img className={styles.img_face} src={face}/>
                <h1 className={styles.title}>Digital Elka</h1>
            </div>
        </div>
    )
}