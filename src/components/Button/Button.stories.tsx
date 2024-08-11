import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button } from './Button';
import { ComponentPropsWithoutRef, HTMLAttributeAnchorTarget } from 'react';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Button> = {
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn(), children: 'Button' },
}

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Solid: Story = {
  args: {

  },
};

export const Outline: Story = {
  args: {
    variant: 'outline'
  },
};

export const Anchor = {
  args: {
    as: 'a',
    href: '#',
    target: '_brank',
    onClick: fn(() => console.log('click'))
  }
}

const Link = ({to, ...props}: Omit<ComponentPropsWithoutRef<"a">, "href"> & {to: string}) => {
  return (
    <a {...props} href={to} onClick={(e) => {
      if (props.onClick) props.onClick(e)

      if (!e.defaultPrevented)  {
        e.preventDefault()
        window.top!.history.pushState('', '', to)
      }
    }} />
  )
}
export const WithCustomComponent = () => {
  return (
    <Button as={Link} to='./?foo=bar' target='_self'>
      Link
    </Button>
  )
}
// export const WithCustomComponent = () => {
//   return (
//     <HashRouter window={window}>
//       <Routes>
//         <Route path='/' element={
//           <>
//           <Button as={Link} to='./foo' target='_self' disabled>
//             Link
//           </Button>
//           <Link to='./foo' onClick={()=> console.log("click")}>pure Link</Link>
//           </>
//         } />
//         <Route path='/foo' element="foo" />
//       </Routes>
//     </HashRouter>
//   )
// }

// export const Large: Story = {
//   args: {
//     size: 'large',
//     label: 'Button',
//   },
// };

// export const Small: Story = {
//   args: {
//     size: 'small',
//     label: 'Button',
//   },
// };

// export const Warning: Story = {
//   args: {
//     primary: true,
//     label: 'Delete now',
//     backgroundColor: 'red',
//   }
// };
