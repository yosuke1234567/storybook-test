import { ReactNode , ComponentPropsWithoutRef, createElement } from 'react';
import styles from './button.module.css';

type ButtonProps<T extends 'button' | 'a'> = ComponentPropsWithoutRef<T> & {
  /**
   * Element type "button" or "a"
   */
  as?: T;
  /**
   * Is this the principal call to action on the page?
   */
  variant?: 'solid' | 'outline';
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Children
   */
  children: ReactNode;
}

/**
 * Primary UI component for user interaction
 */
export const Button = <T extends 'button' | 'a'>({
  as,
  variant = 'solid',
  size = 'medium',
  children,
  ...props
}: ButtonProps<T>) => {
  const elementType = as || 'button'
  return (
    createElement(
      elementType,
      {
        ...props,
        className: `${styles[variant]} ${styles[size]}${props.className ? ` ${props.className}` : ''}`,
      },
      children
    )
  );
};
