import { ReactNode, useEffect } from 'react'
import { createPortal } from 'react-dom'
import styles from './style.module.css'

type DialogProps = {
  children: ReactNode
  isOpen: boolean
}

export const Dialog = ({ children, isOpen }: DialogProps) => {
  useEffect(() => {
    if (isOpen) {
      const scrollbarWidth = window.innerWidth - document.body.clientWidth
      document.body.classList.add(styles.modalOpened)
      document.body.style.setProperty('--scroll-bar-width', `${scrollbarWidth}px`)
    } else {
      document.body.classList.remove(styles.modalOpened)
      document.body.style.removeProperty('--scroll-bar-width')
    }
  }, [isOpen])

  return (
    isOpen && createPortal(
      <div className={styles.overlay}>
        <div className={styles.content}>
          {children}
        </div>
      </div>,
      document.body
    )
  )
}
