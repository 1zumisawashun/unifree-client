import type { Meta, StoryObj } from '@storybook/react'

import { InputText } from '@/components/forms/InputText'
import { ComponentProps } from 'react'

const meta: Meta<typeof InputText> = {
  title: 'forms/InputText',
  component: InputText
}

export default meta

type Story = StoryObj<typeof InputText>

const Render = (props: ComponentProps<typeof InputText>) => {
  return <InputText {...props} />
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
