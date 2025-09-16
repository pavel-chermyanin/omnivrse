// Top.tsx
import styles from './top.module.scss';
import React from 'react'
import face from '../../../assets/winter/face.png'
import arm from '../../../assets/winter/arm.png'

export const Top = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title_wrapper}>
        <img
          className={styles.img_face}
          src={face}
          alt="Лицо снеговика"
        />
        <img
          className={styles.img_arm}
          src={arm}
          alt="Рука снеговика"
        />
        <h1 className={styles.title}>Digital Elka</h1>
      </div>
    </div>
  )
}