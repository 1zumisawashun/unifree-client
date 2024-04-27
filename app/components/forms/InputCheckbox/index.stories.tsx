import type { Meta, StoryObj } from '@storybook/react'

import { InputCheckbox } from '@/components/forms/InputCheckbox'
import { ComponentProps } from 'react'

const meta: Meta<typeof InputCheckbox> = {
  title: 'forms/InputCheckbox',
  component: InputCheckbox
}

export default meta

type Story = StoryObj<typeof InputCheckbox>

const Render = (props: ComponentProps<typeof InputCheckbox>) => {
  return <InputCheckbox {...props} />
}

export const Default: Story = {
  args: {
    children: 'InputCheckbox',
    disabled: false
  },
  render: (args) => <Render {...args} />
}

export const DefaultVariantCard: Story = {
  args: {
    children: 'InputCheckbox',
    disabled: false,
    variant: 'card'
  },
  render: (args) => <Render {...args} />
}
