import type { Meta, StoryObj } from '@storybook/react';
import { TextField, TextFieldContainer } from './TextField';

const meta: Meta<typeof TextField> = {
  component: TextField,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    type: {
      control: 'select',
      options: [
        'date',
        'datetime-local',
        'email',
        'hidden',
        'month',
        'number',
        'password',
        'search',
        'tel',
        'text',
        'time',
        'url',
        'week'
      ]
    }
  },
  args: {},
}

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Text Field'
  },
};

export const WithContainer: Story = {
  args: {
    placeholder: 'Text Field'
  },
  render: (args) => (
    <TextFieldContainer
      error
      errorMessage='Error'
      description='description'
      inputProps={{type: args.type, placeholder: args.placeholder}}
    />
  )
}
