import styles from './footer.module.scss'
import {telegramUrl,vkUrl} from '../../../App'
import telegram from '../../../assets/telegram.png'
import vk from '../../../assets/vk.png'
import {LinkButton} from '../../link-button/LinkButton'

export const Footer = () => {
    return (
        <div className="container">
            <div className={styles.wrapper}>
                <a className={styles.link} href="https://izmenisoznanie.com/" target='_blank'>
                    ПРОДЮСЕР IZMENISOZNANIE.COM
                </a>
                <div className={styles.social_links}>
                    <LinkButton className={styles.social_telegram} plain target={'_blank'} href={telegramUrl}>
                        <img src={telegram} alt="telegram" />
                    </LinkButton>
                    <LinkButton className={styles.social_vk} plain target={'_blank'} href={vkUrl}>
                        <img src={vk} alt="vk" />
                    </LinkButton>


                </div>
            </div>
        </div>
    )
}