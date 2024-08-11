import { ReactNode, ComponentPropsWithoutRef, createElement } from 'react';
import styles from './Button.module.css';

type ButtonProps<T extends 'button' | 'a' | React.ComponentType<any>> = ComponentPropsWithoutRef<T> & {
  /**
   * Element type "button" or "a" or Custom react component
   */
  as?: T;
  variant?: 'solid' | 'outline';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  children: ReactNode;
  onClick?: React.MouseEventHandler
}

export const Button = <T extends 'button' | 'a' | React.ComponentType<any>>({
  as,
  variant = 'solid',
  size = 'medium',
  children,
  disabled,
  onClick,
  ...props
}: ButtonProps<T>) => {
  const elementType = as || 'button'
  const handleDisabledClick = (event: React.MouseEvent) => {
    event.preventDefault()
  }
  return (
    createElement(
      elementType,
      {
        ...props,
        onClick: disabled ? handleDisabledClick : onClick,
        [elementType !== 'button' ? 'aria-disabled' : 'disabled']: disabled,
        className: `${styles[variant]} ${styles[size]}${props.className ? ` ${props.className}` : ''}`,
      },
      children
    )
  );
};
