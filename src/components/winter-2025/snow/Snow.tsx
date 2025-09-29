// components/winter-2025/snow/Snow.tsx
import { useRef, useEffect } from 'react';
import styles from './snow.module.scss';

interface Snowflake {
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  rotation: number;
  rotationSpeed: number;
}

export const Snow = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const snowflakesRef = useRef<Snowflake[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Инициализация снежинок
    const initSnowflakes = () => {
      const snowflakes: Snowflake[] = [];
      for (let i = 0; i < 50; i++) {
        snowflakes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 10 + 10, // 10-20px
          speed: Math.random() * 0.5 + 0.6, // скорость падения
          opacity: Math.random() * 0.7 + 0.3,
          rotation: Math.random() * 360,
          rotationSpeed: Math.random() * 2 - 1 // скорость вращения
        });
      }
      return snowflakes;
    };

    // Отрисовка одной снежинки
    const drawSnowflake = (flake: Snowflake) => {
      ctx.save();
      ctx.translate(flake.x, flake.y);
      ctx.rotate((flake.rotation * Math.PI) / 180);

      ctx.fillStyle = `rgba(255, 255, 255, ${flake.opacity})`;
      ctx.font = `${flake.size}px Arial`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('•', 0, 0);

      ctx.restore();
    };

    // Обновление позиций снежинок
    const updateSnowflakes = () => {
      snowflakesRef.current.forEach((flake) => {
        // Падение вниз
        flake.y += flake.speed;

        // Вращение
        flake.rotation += flake.rotationSpeed;

        // Если снежинка ушла за нижнюю границу - создаем новую сверху
        if (flake.y > canvas.height + 20) {
          flake.y = -20;
          flake.x = Math.random() * canvas.width;
        }
      });
    };

    // Основной цикл анимации
    const animate = () => {
      if (!canvas || !ctx) return;

      // Очищаем canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Обновляем и рисуем снежинки
      updateSnowflakes();
      snowflakesRef.current.forEach(drawSnowflake);

      animationRef.current = requestAnimationFrame(animate);
    };

    // Обработчик изменения размера
    const handleResize = () => {
      if (!canvas) return;

      const container = canvas.parentElement;
      if (container) {
        canvas.width = container.clientWidth;
        canvas.height = container.clientHeight;

        // Пересоздаем снежинки при изменении размера
        snowflakesRef.current = initSnowflakes();
      }
    };

    // Инициализация
    handleResize();
    snowflakesRef.current = initSnowflakes();
    animate();

    // Слушатель изменения размера
    window.addEventListener('resize', handleResize);

    // Очистка
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div className={styles.snowContainer}>
      <canvas ref={canvasRef} className={styles.snowCanvas} />
    </div>
  );
};