import styles from './header.module.scss'
import logo from '../../assets/logo.webp'
import telegram from '../../assets/telegram.png'
import vk from '../../assets/vk.png'
import {Button} from "../button/Button.jsx";
import {BurgerMenu} from "../burger-menu/BurgerMenu.jsx";
import {LinkButton} from "../link-button/LinkButton.jsx";
import {buyTicketUrl, mainSiteUrl, telegramUrl, vkUrl} from "../../App.jsx";

export const Header = () => {

  const onClickTickets = () => {
    const element = document.getElementById('tickets');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    }
  }

  const menuItems = [
    {
      id: 'about',
      label: 'О мероприятии', onClick: () => {
      }
    },
    {
      id: 'tickets',
      label: 'Билеты', onClick: () => {
      }
    },
    // {
    //   id: 'concept',
    //   label: 'Концепция',
    //   onClick: () => {
    //   }
    // },
    // {
    //   id: 'dress_code',
    //   label: 'Дресс-код',
    //   onClick: () => {
    //   }
    // },
    {
      id: 'partners',
      label: 'Партнеры Мероприятия',
      onClick: () => {
      }
    },
  ];
  return (
    <header className={styles.header}>

      <div className={'container'}>
        <div className={styles.flex_container}>
          <div className={styles.left}>
            <LinkButton plain target={'_blank'} href={mainSiteUrl}>
              <img className={styles.logo} src={logo} alt="logo"/>
            </LinkButton>
            <p className={styles.logo_text}>
           
              <span>
              Digital Elka 2025
              </span>
            </p>
          </div>

          <div className={styles.right}>
            <Button onClick={onClickTickets} className={styles.right_buy_ticket}>Купить
              билет</Button>
            <div className={styles.social_links}>
              <LinkButton className={styles.social_telegram} plain target={'_blank'} href={telegramUrl}>
                <img src={telegram} alt="telegram"/>
              </LinkButton>
              <LinkButton className={styles.social_vk} plain target={'_blank'} href={vkUrl}>
                <img src={vk} alt="vk"/>
              </LinkButton>


            </div>
            <BurgerMenu items={menuItems}/>
          </div>

        </div>


      </div>
    </header>
  );
};