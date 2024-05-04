import type { Meta, StoryObj } from '@storybook/react'

import { HeaderMenu } from './index'

const meta: Meta<typeof HeaderMenu> = {
  title: 'layouts/HeaderMenu',
  component: HeaderMenu,
  parameters: {
    layout: 'centered'
  }
}

export default meta

type Story = StoryObj<typeof HeaderMenu>

export const Default: Story = {
  args: {
    isAuthenticated: true
  }
}

export const DefaultNotAuth: Story = {
  args: {
    isAuthenticated: false
  }
}
