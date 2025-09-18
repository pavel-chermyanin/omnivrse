import styles from './description.module.scss'

export const Description = () => {
    return (
        <div className="container">
            <div id='about' className={styles.wrapper}>
                <p className={styles.first_p}>
                    Продюсеры выездной конференции
                    IZMENI SOZNANIE И КУЛЬТОВОЙ
                    новогодней вечеринки DIGITAL ELKA
                    возвращаются с продолжением
                    своего летнего проекта - DIGITAL ELKA.
                </p>
                <p className={styles.second_p}>
                    После громкой премьеры в прошлом году, DIGITAL ELKA
                    становится ежегодной традицией. В этом сезоне нас ждёт
                    очередное погружение в иммерсивную реальность.
                </p>
                <p className={styles.third_p}>
                    DIGITAL ELKA: OMNIVERSE - это не просто вечеринка,
                    а событие для тех, кто определяет тренды индустрии.
                    Мы делаем масштабнее, смелее, ярче - чтобы снова удивить
                    даже самых искушённых.
                </p>
            </div>
        </div>
    )
}