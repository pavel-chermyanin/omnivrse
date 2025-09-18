import styles from './buyTickets.module.scss'
import { LinkButton } from "../../link-button/LinkButton.jsx";
import { buyTicketUrl } from "../../../App.jsx";

export const BuyTickets = () => {
    const EMAIL_SUBJECT = "Digital Elka 2025: старт продаж";
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
        <div className={styles.wrapper}>
            <div className={'container'}>
                <p id={'tickets'} className={styles.buttons_text}>КУПИТЬ БИЛЕТ</p>

                <div className={styles.buttons}>
                    <LinkButton className={styles.button} target={'_blank'} href={hrefUrl}>КАК ЮРИДИЧЕСКОЕ<br /> ЛИЦО</LinkButton>
                    <LinkButton className={styles.button} target={'_blank'} href={buyTicketUrl}>КАК
                        ФИЗИЧЕСКОЕ<br /> ЛИЦО</LinkButton>
                    {/*<Button className={styles.button}>КАК ФИЗИЧЕСКОЕ<br/> ЛИЦО</Button>*/}
                </div>
            </div>


        </div>
    )
}