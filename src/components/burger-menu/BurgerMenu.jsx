import { useState, useEffect, useRef } from 'react';
import styles from './burger.module.scss';

export const BurgerMenu = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Функция для плавной прокрутки
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    }
    closeMenu();
  };

  return (
    <div className={styles.burgerMenu} ref={menuRef}>
      <button
        className={`${styles.burgerButton} ${isOpen ? styles.open : ''}`}
        onClick={toggleMenu}
        aria-label="Меню"
        aria-expanded={isOpen}
      >
        <span className={`${styles.burgerLine} ${styles.top}`} />
        <span className={`${styles.burgerLine} ${styles.middle}`} />
        <span className={`${styles.burgerLine} ${styles.bottom}`} />
      </button>

      <div className={`${styles.menuContainer} ${isOpen ? styles.visible : ''}`}>
        <nav className={styles.menuContent}>
          <button
            className={styles.closeButton}
            onClick={closeMenu}
            aria-label="Закрыть меню"
          >
            &times;
          </button>
          {items.map((item, index) => (
            <a
              key={index}
              href={`#${item.id}`}
              className={`${styles.menuItem} ${item.isDanger ? styles.danger : ''}`}
              onClick={(e) => {
                e.preventDefault(); // Предотвращаем стандартное поведение ссылки
                scrollToSection(item.id);
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};