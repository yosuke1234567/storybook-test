import { useState } from "react"
import { SegmentedControlItem, SegmentedControlRoot } from "./SegmentedControl"

const meta = {
  parameters: {
    layout: 'centered'
  }
}

export default meta

export const Basic = () => {
  const [value, setValue] = useState('')

  return (
    <SegmentedControlRoot
      value={value}
      onValueChange={(selectedValue) => setValue(selectedValue)}
    >
      <SegmentedControlItem value="1">Inbox</SegmentedControlItem>
      <SegmentedControlItem value="2">Drafts</SegmentedControlItem>
      <SegmentedControlItem value="3">Sent</SegmentedControlItem>
    </SegmentedControlRoot>
  )
}