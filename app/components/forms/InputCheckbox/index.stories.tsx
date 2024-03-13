import type { Meta, StoryObj } from '@storybook/react'

import { InputCheckbox } from '@/components/forms/InputCheckbox'
import { ComponentProps } from 'react'

const meta: Meta<typeof InputCheckbox> = {
  title: 'forms/InputCheckbox',
  component: InputCheckbox,
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

type Story = StoryObj<typeof InputCheckbox>

const InputCheckboxWithHooks = (
  props: ComponentProps<typeof InputCheckbox>
) => {
  return <InputCheckbox {...props} />
}

export const Primary: Story = {
  args: {
    children: 'InputCheckbox',
    disabled: false
  },
  render: (args) => <InputCheckboxWithHooks {...args} />
}

export const PrimaryWithCard: Story = {
  args: {
    children: 'InputCheckbox',
    disabled: false,
    variant: 'card'
  },
  render: (args) => <InputCheckboxWithHooks {...args} />
}
