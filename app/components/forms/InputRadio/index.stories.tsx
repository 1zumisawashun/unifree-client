import type { Meta, StoryObj } from '@storybook/react'

import { InputRadio } from '@/components/forms/InputRadio'
import { ComponentProps } from 'react'

const meta: Meta<typeof InputRadio> = {
  title: 'forms/InputRadio',
  component: InputRadio
}

export default meta

type Story = StoryObj<typeof InputRadio>

const Render = (props: ComponentProps<typeof InputRadio>) => {
  return <InputRadio {...props} />
}

export const Default: Story = {
  args: {
    children: 'InputRadio',
    disabled: false
  },
  render: (args) => <Render {...args} />
}

export const DefaultVariantCard: Story = {
  args: {
    children: 'InputRadio',
    disabled: false,
    variant: 'card'
  },
  render: (args) => <Render {...args} />
}
