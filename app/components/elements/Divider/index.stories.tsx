import type { Meta, StoryObj } from '@storybook/react'

import { Divider } from '@/components/elements/Divider'

const meta: Meta<typeof Divider> = {
  title: 'elements/Divider',
  component: Divider
}

export default meta

type Story = StoryObj<typeof Divider>

export const Default: Story = {}
