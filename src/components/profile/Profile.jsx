import styles from './profile.module.scss'
import {Button} from "../button/Button.jsx";


export const Profile = () => {

  return (
    <div className={styles.profile}>


      <div >
        <p className={styles.text}>
          Продюсеры выездной
          <span> конференции IZMENI SOZNANIE </span>
          и культовой новогодней вечеринки DIGITAL ELKA возвращаются с продолжением
          своего летнего проекта -
          <span> ЛЕТНЯЯ DIGITAL ELKA</span>
        </p>
        <p className={styles.text}>
          После громкой премьеры в прошлом году, ЛЕТНЯЯ DIGITAL ELKA становится ежегодной традицией.
          В этом сезоне нас ждет очередное погружение в иммерсивную реальность.
        </p>
        <p className={styles.text}>
          <span>ЛЕТНЯЯ DIGITAL ELKA: OMNIVERSE</span> - это непросто вечеринка, а событие для тех, кто определяет
          тренды индустрии. Мы делаем масштабнее, смелее, ярче - чтобыы снова удивить даже самых искушенных
        </p>

        <p className={styles.buttons_text}>КУПИТЬ БИЛЕТ</p>
        <div className={styles.buttons}>
          <Button className={styles.button}>КАК ЮРИДИЧЕСКОЕ<br/> ЛИЦО</Button>
          <Button className={styles.button}>КАК ФИЗИЧЕСКОЕ<br/> ЛИЦО</Button>
        </div>

      </div>
    </div>
  );
};