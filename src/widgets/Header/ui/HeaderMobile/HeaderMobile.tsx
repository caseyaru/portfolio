import styles from "./HeaderMobile.module.scss";
import { useEffect, useRef, useState } from "react";
import { AppLink, AppLinkKits } from "../../../../shared/ui/AppLink/AppLink";

interface Props {}

export const HeaderMobile: React.FC<Props> = () => {
  const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const menu = menuRef.current;
    if (menu) {
      if (isMenuOpened) {
        menu.style.height = `${menu.scrollHeight + 60}px`;
      } else {
        menu.style.height = `${menu.scrollHeight + 60}px`;
        setTimeout(() => {
          menu.style.height = "0px";
        }, 10);
      }
    }
  }, [isMenuOpened]);

  const toggleMenu = () => {
    setIsMenuOpened(!isMenuOpened);
  };

  return (
    <>
      <button
        className={`${styles.burger} ${
          isMenuOpened ? styles.burger_opened : ""
        }`}
        onClick={toggleMenu}
      >
        <span />
        <span />
        <span />
      </button>

      <nav
        className={`${styles.menu} ${isMenuOpened ? styles.menu_opened : ""}`}
        ref={menuRef}
        style={{
          overflow: "hidden",
          transition: "height 0.4s ease-in-out, padding 0.4s ease-in-out",
        }}
      >
        <div className={styles.burger__content}>
          <div className={styles.links}>
            <AppLink href="#about" text="Обо мне" kit={AppLinkKits.HEADER} />
            <AppLink href="#stack" text="Стек" kit={AppLinkKits.HEADER} />
            <AppLink href="#projects" text="Проекты" kit={AppLinkKits.HEADER} />
          </div>
        </div>
      </nav>

      <div
        className={`${styles.backdrop} ${
          isMenuOpened ? styles.backdrop_opened : ""
        }`}
      />
    </>
  );
};
