import type { Meta, StoryObj } from '@storybook/react'

import { InputTextarea } from '@/components/forms/InputTextarea'
import { ComponentProps } from 'react'

const meta: Meta<typeof InputTextarea> = {
  title: 'forms/InputTextarea',
  component: InputTextarea
}

export default meta

type Story = StoryObj<typeof InputTextarea>

const Render = (props: ComponentProps<typeof InputTextarea>) => {
  return <InputTextarea {...props} />
}

export const Default: Story = {
  args: {
    label: 'label',
    description: 'description',
    isRequired: true,
    isOptioned: false,
    disabled: false,
    placeholder: 'placeholder'
  },
  render: (args) => <Render {...args} />
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
  render: (args) => <Render {...args} />
}
