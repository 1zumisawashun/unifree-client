import type { Meta, StoryObj } from '@storybook/react'

import { InputToggle } from '@/components/forms/InputToggle'
import { ComponentProps } from 'react'

const meta: Meta<typeof InputToggle> = {
  title: 'forms/InputToggle',
  component: InputToggle
}

export default meta

type Story = StoryObj<typeof InputToggle>

const Render = (props: ComponentProps<typeof InputToggle>) => {
  return <InputToggle {...props} />
}

export const Default: Story = {
  args: {
    children: 'InputToggle'
  },
  render: (args) => <Render {...args} />
}
