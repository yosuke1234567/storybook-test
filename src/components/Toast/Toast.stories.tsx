import { useState } from "react"
import { Button } from "../Button/Button"
import { Toast } from "./Toast"

const meta = {
  parameters: {
    layout: 'centered'
  }
}

export default meta

export const Basic = () => {
  const [isOpen, setIsOpen] = useState(false)
  const handleClose = () => setIsOpen(false)
  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open</Button>
      <Toast isOpen={isOpen} onClose={handleClose}>Hello World.</Toast>
    </>
  )
}