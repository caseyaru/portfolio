import clsx from 'clsx';
import styles from './AppLink.module.scss';

export enum AppLinkKits {
  DEFAULT = 'default',
  COLORED = 'colored',
  HEADER = 'header',
  FOOTER = 'footer',
  CLEAR = 'clear',
  LINK_PRIMARY = 'link-primary',
  LINK_PRIMARY_TITLE = 'link-primary-title',
  LINK_SECONDARY = 'link-secondary',
  TEXT = 'text',
}

export enum AppLinkSize {
  LARGE = 'large',
  SMALL = 'small',
  NORMAL = 'normal',
}

interface AppLinkProps {
  key?: any;
  kit?: AppLinkKits;
  size?: AppLinkSize;
  href: string;
  text?: string;
  blank?: boolean;
  children?: React.ReactNode;
  className?: string;
  active?: boolean;
  disabled?: boolean;
  onClick?: any;
}

export const AppLink: React.FC<AppLinkProps> = ({
  key,
  kit = AppLinkKits.DEFAULT,
  size = AppLinkSize.NORMAL,
  href,
  text,
  blank,
  children,
  className,
  active,
  disabled,
  onClick,
}) => {
  return (
    <>
      {!disabled ? (
        <a
          className={clsx(
            styles.link,
            styles[`link_${kit}`],
            styles[`link_${size}`],
            { [styles.link_active]: active },
            { [styles.link_disabled]: disabled },
            className,
          )}
          href={href}
          {...(blank ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          key={key}
          onClick={onClick}
        >
          {text}
          {children}
        </a>
      ) : (
        <span
          className={clsx(
            styles.link,
            styles[`link_${kit}`],
            styles[`link_${size}`],
            styles.link_disabled,
            className,
          )}
        >
          {text}
        </span>
      )}
    </>
  );
};
