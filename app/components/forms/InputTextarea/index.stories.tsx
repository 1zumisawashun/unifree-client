import type { Meta, StoryObj } from '@storybook/react'

import { InputTextarea } from '@/components/forms/InputTextarea'
import { ComponentProps } from 'react'

const meta: Meta<typeof InputTextarea> = {
  title: 'forms/InputTextarea',
  component: InputTextarea,
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

type Story = StoryObj<typeof InputTextarea>

const InputTextareaWithHooks = (
  props: ComponentProps<typeof InputTextarea>
) => {
  return <InputTextarea {...props} />
}

export const Main: Story = {
  args: {
    label: 'label',
    description: 'description',
    isRequired: true,
    isOptioned: false,
    disabled: false,
    placeholder: 'placeholder'
  },
  render: (args) => <InputTextareaWithHooks {...args} />
}

export const Error: Story = {
  args: {
    label: 'label',
    description: 'description',
    isRequired: true,
    isOptioned: false,
    disabled: false,
    placeholder: 'placeholder',
    error: 'error'
  },
  render: (args) => <InputTextareaWithHooks {...args} />
}
