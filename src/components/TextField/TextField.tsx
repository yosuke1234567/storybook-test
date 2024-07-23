import type { ComponentPropsWithRef, ReactNode } from 'react'
import { forwardRef } from 'react'
import styles from './TextField.module.css'

type TextFieldProps = ComponentPropsWithRef<'input'> & {
  error?: boolean
  type?:
  | 'date'
  | 'datetime-local'
  | 'email'
  | 'hidden'
  | 'month'
  | 'number'
  | 'password'
  | 'search'
  | 'tel'
  | 'text'
  | 'time'
  | 'url'
  | 'week'
}

type TextFieldContainerProps = {
  error?: boolean
  errorMessage?: ReactNode
  description?: ReactNode
  inputProps?: Omit<TextFieldProps, 'error'>
}

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(({ error, type = 'text', ...props }, ref) => {
  return (
    <input
      {...props}
      ref={ref}
      className={`${styles.input}${error ? ` ${styles.error}` : ''}${props.className ? ` ${props.className}` : ''}`}
      type={type}
    />
  )
})

const TextFieldContainer = forwardRef<HTMLInputElement, TextFieldContainerProps>(({
  error,
  errorMessage,
  description,
  inputProps
}, ref) => {
  return (
    <div className={styles.container}>
      {error && errorMessage && <div className={styles.errorMessage}>{errorMessage}</div>}
      <TextField {...inputProps} error={error} ref={ref} />
      {description && <div className={styles.description}>{description}</div>}
    </div>
  )
})

export {
  TextField,
  TextFieldContainer,
}

export type {
  TextFieldProps,
  TextFieldContainerProps
}
