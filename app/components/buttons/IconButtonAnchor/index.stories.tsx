import type { Meta, StoryObj } from '@storybook/react'

import { IconButtonAnchor } from './index'

const meta: Meta<typeof IconButtonAnchor> = {
  title: 'buttons/IconButtonAnchor',
  component: IconButtonAnchor
}

export default meta

type Story = StoryObj<typeof IconButtonAnchor>

export const Default: Story = {
  args: {
    href: '/',
    name: 'add'
  }
}
