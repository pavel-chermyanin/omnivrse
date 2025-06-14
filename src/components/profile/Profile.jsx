import styles from './profile.module.scss'
import {Button} from "../button/Button.jsx";
import {buyTicketUrl} from "../../App.jsx";
import {LinkButton} from "../link-button/LinkButton.jsx";


export const Profile = () => {

  const EMAIL_SUBJECT = "Летняя Digital Elka 2025: старт продаж";
  const EMAIL_BODY = `Коллеги, добрый день!

Хотим приобрести билеты на Летнюю Digital Elka с оформлением по безналичному расчету (приложите, пожалуйста, ваши реквизиты в ответ на это письмо).
– Количество билетов: _ шт.
– Интересует ли партнерство: да/нет.

Любые вопросы по мероприятию можете задать в свободной форме в этом же письме.

С уважением, команда IZMENI SOZNANIE`;
  const MAIL_URL = 'zakaz@izmenisoznanie.com'

// В компоненте:

  const hrefUrl = `mailto:${MAIL_URL}?subject=${encodeURIComponent(EMAIL_SUBJECT)}&body=${encodeURIComponent(EMAIL_BODY)}`

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

        <p id={'tickets'} className={styles.buttons_text}>КУПИТЬ БИЛЕТ</p>
        <div className={styles.buttons}>
          <LinkButton className={styles.button} target={'_blank'} href={hrefUrl}>КАК ЮРИДИЧЕСКОЕ<br/> ЛИЦО</LinkButton>
          <LinkButton className={styles.button} target={'_blank'} href={buyTicketUrl}>КАК ФИЗИЧЕСКОЕ<br/> ЛИЦО</LinkButton>
          {/*<Button className={styles.button}>КАК ФИЗИЧЕСКОЕ<br/> ЛИЦО</Button>*/}
        </div>

      </div>
    </div>
  );
};