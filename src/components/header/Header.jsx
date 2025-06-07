import styles from './header.module.scss'
import logo from '../../assets/logo.png'
import telegram from '../../assets/telegram.png'
import vk from '../../assets/vk.png'
import {Button} from "../button/Button.jsx";
import {BurgerMenu} from "../burger-menu/BurgerMenu.jsx";

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
            <Button >Купить билет</Button>
            <div className={styles.social_links}>
              <a href="#">
                <img src={telegram} alt="telegram"/>
              </a>
              <a href="#">
                <img src={vk} alt="vk"/>
              </a>
            </div>
            <BurgerMenu items={menuItems} />
          </div>

        </div>


      </div>
    </header>
  );
};