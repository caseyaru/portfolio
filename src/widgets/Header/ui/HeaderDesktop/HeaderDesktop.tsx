import { AppLink, AppLinkKits } from '../../../../shared/ui/AppLink/AppLink';
import { MailIcon } from '../../../../shared/ui/icons/Mail';
import { TelegramIcon } from '../../../../shared/ui/icons/Telegram';
import styles from './HeaderDesktop.module.scss';

interface Props {}

export const HeaderDesktop: React.FC<Props> = () => {
  return (
    <>
      <div className={styles.block}>

        <nav className={styles.links}>
          <AppLink href="#about" text="Обо мне" kit={AppLinkKits.HEADER} />
          <AppLink href="#stack" text="Стек" kit={AppLinkKits.HEADER} />
          <AppLink href="#projects" text="Проекты" kit={AppLinkKits.HEADER} />
        </nav>
      </div>

      <div className={styles.block_right}>
        <ul className={styles.contacts}>
          <li>
            <MailIcon color="rgb(46,128,228)" />
          </li>
          <li>
            <TelegramIcon  color="rgb(46,128,228)" />
          </li>
        </ul>
      </div>
    </>
  );
};
