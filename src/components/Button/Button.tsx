import { ReactNode , ComponentPropsWithoutRef, createElement } from 'react';
import styles from './Button.module.css';

type ButtonProps<T extends 'button' | 'a'> = ComponentPropsWithoutRef<T> & {
  /**
   * Element type "button" or "a"
   */
  as?: T;
  variant?: 'solid' | 'outline';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  children: ReactNode;
}

export const Button = <T extends 'button' | 'a'>({
  as,
  variant = 'solid',
  size = 'medium',
  children,
  disabled,
  ...props
}: ButtonProps<T>) => {
  const elementType = as || 'button'
  return (
    createElement(
      elementType,
      {
        ...props,
        [elementType === 'a' ? 'aria-disabled' : 'disabled']: disabled,
        className: `${styles[variant]} ${styles[size]}${props.className ? ` ${props.className}` : ''}`,
      },
      children
    )
  );
};
