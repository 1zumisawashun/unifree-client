import type { Meta, StoryObj } from '@storybook/react'

import { IconButton } from './index'

const meta: Meta<typeof IconButton> = {
  title: 'buttons/IconButton',
  component: IconButton
}

export default meta

type Story = StoryObj<typeof IconButton>

export const Default: Story = {
  args: {
    name: 'add'
  }
}
