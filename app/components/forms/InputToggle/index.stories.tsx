import type { Meta, StoryObj } from '@storybook/react'

import { InputToggle } from '@/components/forms/InputToggle'
import { ComponentProps } from 'react'

const meta: Meta<typeof InputToggle> = {
  title: 'forms/InputToggle',
  component: InputToggle,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered'
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs']
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' }
  // }
}

export default meta

type Story = StoryObj<typeof InputToggle>

const InputToggleWithHooks = (props: ComponentProps<typeof InputToggle>) => {
  return <InputToggle {...props} />
}

export const Main: Story = {
  args: {
    children: 'InputToggle'
  },
  render: (args) => <InputToggleWithHooks {...args} />
}
