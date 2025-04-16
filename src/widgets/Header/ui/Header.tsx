import { useEffect, useState } from 'react';
import styles from './Header.module.scss';
import { HeaderDesktop } from './HeaderDesktop/HeaderDesktop';
import { HeaderMobile } from './HeaderMobile/HeaderMobile';

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
  const [appWidth, setAppWidth] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => {
      setAppWidth(window.innerWidth);
      if (window.innerWidth > 768) document.body.classList.remove('lock');
    };

    setAppWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className={styles.header}>
      <section className={styles.header__content}>
        {appWidth > 1023 ? (
          <HeaderDesktop />
        ) : (
          <HeaderMobile />
        )}
      </section>
    </header>
  );
};
