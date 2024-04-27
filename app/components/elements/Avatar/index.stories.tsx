import type { Meta, StoryObj } from '@storybook/react'

import { Avatar } from '@/components/elements/Avatar'

const meta: Meta<typeof Avatar> = {
  title: 'elements/Avatar',
  component: Avatar
}

export default meta

type Story = StoryObj<typeof Avatar>

export const Default: Story = {
  args: {}
}
