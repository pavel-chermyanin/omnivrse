import styles from './header.module.scss'
import logo from '../../assets/logo.png'
import telegram from '../../assets/telegram.png'
import vk from '../../assets/vk.png'
import {Button} from "../button/Button.jsx";
import {BurgerMenu} from "../burger-menu/BurgerMenu.jsx";
import {LinkButton} from "../link-button/LinkButton.jsx";
import {buyTicketUrl, telegramUrl, vkUrl} from "../../App.jsx";

export const Header = () => {
  const menuItems = [
    { label: 'Сохранить фильтр', onClick: () => {} },
    { label: 'Сбросить фильтры', onClick: () => {}},
    { label: 'Выйти', onClick: () => {}},
  ];
  return (
    <header className={styles.header}>

      <div className={'container'}>
        <div className={styles.flex_container}>
          <div className={styles.left}>
            <img src={logo} alt="logo"/>
            <p className={styles.logo_text}>
              <span className={styles.primary_color_text}>
                летняя
              </span>
              <span>
              DIGITAL ELKA 2025
              </span>
            </p>
          </div>

          <div className={styles.right}>
            <LinkButton target={'_blank'} href={buyTicketUrl}>Купить билет</LinkButton>
            <div className={styles.social_links}>
              <LinkButton plain target={'_blank'} href={telegramUrl}>
                <img src={telegram} alt="telegram"/>
              </LinkButton>
              <LinkButton plain target={'_blank'} href={vkUrl}>
                <img src={vk} alt="vk"/>
              </LinkButton>


            </div>
            <BurgerMenu items={menuItems} />
          </div>

        </div>


      </div>
    </header>
  );
};