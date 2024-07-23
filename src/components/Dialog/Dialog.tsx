import { MouseEvent, ReactNode, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import styles from './Dialog.module.css'

type DialogProps = {
  children: ReactNode
  isOpen: boolean
  onClose: () => void
  shouldCloseOnOverlayClick?: boolean
}

export const Dialog = ({ children, isOpen, onClose, shouldCloseOnOverlayClick }: DialogProps) => {
  const [shouldOpen, setShouldOpen] = useState<boolean>()
  const ref = useRef<HTMLDivElement>(null)

  const handleBackdropClick = (event: MouseEvent) => {
    if (!shouldCloseOnOverlayClick) return
    if (event.target === ref.current) {
      ref.current.classList.add(styles.isClose)
      onClose()
    }
  }

  useEffect(() => {
    if (isOpen) {
      const scrollbarWidth = window.innerWidth - document.body.clientWidth
      document.body.classList.add(styles.modalOpened)
      document.body.style.setProperty('--scroll-bar-width', `${scrollbarWidth}px`)
      setShouldOpen(true)
    } else {
      setTimeout(() => {
        document.body.classList.remove(styles.modalOpened)
        document.body.style.removeProperty('--scroll-bar-width')
        setShouldOpen(false)
      }, 200)
    }
  }, [isOpen])

  return (
    shouldOpen && createPortal(
      <div ref={ref} onClick={handleBackdropClick} className={`${styles.overlay} ${!isOpen ? styles.isClose : ''}`}>
        <div className={styles.content} role="dialog">
          {children}
        </div>
      </div>,
      document.body
    )
  )
}
