import { Meta, StoryObj } from "@storybook/react"
import { Dialog } from "./Dialog"
import { Button } from "../Button/Button"
import { useState } from "react"

const component = ({ shouldCloseOnOverlayClick }: { shouldCloseOnOverlayClick?: boolean }) => {
  const [isOpen, setIsOpen] = useState(false)
  const handleClose = () => setIsOpen(false)
  return (
    <>
      <Button variant="solid" onClick={() => setIsOpen(true)}>Open</Button>
      <Dialog isOpen={isOpen} onClose={handleClose} shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}>
        <div style={{ marginBottom: 12 }}>This is dialog.</div>
        <Button variant="outline" onClick={handleClose}>Close</Button>
      </Dialog>
    </>
  )
}

const meta = {
  component,
} satisfies Meta<typeof Dialog>;

export default meta
type Story = StoryObj<typeof meta>;

export const SimpleDialog: Story = {
  args: {}
}

export const BackdropClose: Story = {
  args: {
    shouldCloseOnOverlayClick: true
  }
}
