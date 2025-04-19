import { clsx } from 'clsx';
import styles from './Button.module.scss';
import type { MouseEvent } from 'react';

export enum ButtonKits {
  DEFAULT = 'default',
  COLORED = 'colored',
  LINK = 'link',
}

export enum ButtonSize {
  LARGE = 'large',
  SMALL = 'small',
  DEFAULT = 'default-size',
}

interface ButtonProps {
  kit?: ButtonKits;
  size?: ButtonSize;
  text?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  style?: React.CSSProperties;
  disabled?: boolean;
  children?: React.ReactNode;
  formAction?: any;
  ref?: any;
}

export const Button: React.FC<ButtonProps> = ({
  kit = ButtonKits.DEFAULT,
  size = ButtonSize.LARGE,
  text,
  onClick,
  type = 'button',
  className,
  style,
  disabled,
  children,
  formAction,
  ref,
}) => {
  return (
    <button
      formAction={formAction}
      ref={ref}
      className={clsx(
        styles.button,
        styles[`button_${kit}`],
        styles[`button_${size}`],
        { [styles.disabled]: disabled },
        className,
      )}
      style={style}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {text ? text : children}
    </button>
  );
};
