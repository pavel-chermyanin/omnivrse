import styles from './partners.module.scss'
import sostavLogo from './assets/sostav_logo.png'
import lacomcciLogo from './assets/lacomcci.png'
import maerLogo from './assets/maer.png'
import { PartnerItem } from './PartnerItem'
export const sostavSiteUrl = 'https://www.sostav.ru/'

export const Partners = () => {
    return (
        <div className="container">
            <div id='partners' className={styles.wrapper}>
                <PartnerItem title={'ИНФОРМАЦИОННЫЙ ПАРТНЕР'}
                    listImages={[{ src: sostavLogo, link: sostavSiteUrl }]} />
                <PartnerItem title={'ПАРТНЕР ПО ВИДЕОКОНТЕНТУ'}
                    listImages={[{ src: lacomcciLogo }]} />
                <PartnerItem title={'МУЛЬТИМЕДИЙНЫЙ ПАРТНЕР'}
                    listImages={[{ src: maerLogo }]} />
            </div>
        </div>

    )
}