import { ComponentPropsWithRef, forwardRef } from 'react';
import styles from './textField.module.css'

type TextFieldProps = ComponentPropsWithRef<'input'> & {

}

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(({ ...props }, ref) => {
  return (
    <input
      {...props}
      ref={ref}
      className={`${styles.base}${props.className ? ` ${props.className}` : ''}`}
      type="text"
    />
  )
})
