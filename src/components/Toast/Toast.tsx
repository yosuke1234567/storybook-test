import { ReactNode, useEffect } from 'react'
import styles from './Toast.module.css'
import { createPortal } from 'react-dom'

type ToastProps = {
  isOpen: boolean
  onClose: () => void
  duration?: number
  children: ReactNode 
}

const Toast = ({ isOpen, onClose, duration = 5000, children }: ToastProps) => {

  useEffect(() => {
    let timeout: NodeJS.Timeout
    if (isOpen) timeout = setTimeout(onClose, duration)

    return () => {
      clearTimeout(timeout)
    }
  }, [isOpen])

  return (
    isOpen && createPortal(
      <section className={styles.container}>
        <output role="status" className={styles.output}>
          {children}
        </output>
        <button className={styles.close} type="button" aria-label="閉じる" onClick={onClose}></button>
      </section>,
      document.body
    )
  )
}

export { Toast }
