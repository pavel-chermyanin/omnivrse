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
  // Упрощенная версия функции скролла
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (!element) return;

    const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - 100;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 1000;
    let startTime = null;

    const animation = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);

      // Кубическая функция плавности
      const easeInOutCubic = progress < 0.5
          ? 4 * progress * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 3) / 2;

      window.scrollTo(0, startPosition + distance * easeInOutCubic);

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
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