import { AppLink, AppLinkKits } from '../../../shared/ui/AppLink/AppLink';
import styles from './Footer.module.scss';

interface FooterProps {}

export const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <AppLink href="#projects" text="GitHub" kit={AppLinkKits.FOOTER} />
        <AppLink href="#projects" text="LinkedIn" kit={AppLinkKits.FOOTER} />
        <div className={styles.separator}>/ / /</div>
        <p>Разработка by me ;)</p>
      </div>
    </footer>
  );
};
