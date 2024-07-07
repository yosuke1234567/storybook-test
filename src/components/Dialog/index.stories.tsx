import { Meta, StoryObj } from "@storybook/react"
import { Dialog } from "."
import { Button } from "../Button/Button";
import { useReducer } from "react";

const meta = {
  title: 'Example/Dialog',
  component: Dialog,
  tags: ['autodocs'],
  argTypes: {
    isOpen: {},
    children: {}
  }
} satisfies Meta<typeof Dialog>;

export default meta
// type Story = StoryObj<typeof meta>;

// export const Default: Story = {
//   argTypes: {
//     isOpen: { control: 'boolean' }
//   },
//   args: {
//     isOpen: false,
//     children: <>this is children</>
//   }
// }

export const WithButton = {
  render: () => {
    const [isOpen, toggle] = useReducer(prev => !prev, false)
    return (
      <>
        <Button label="Open" onClick={toggle} />
        <Dialog isOpen={isOpen}>
          <p>this is dialog.</p>
          <Button label="Close" onClick={toggle} />
        </Dialog>
      </>
    )
  }
}
