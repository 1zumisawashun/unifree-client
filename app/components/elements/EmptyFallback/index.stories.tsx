import type { Meta, StoryObj } from '@storybook/react'

import { EmptyFallback } from './index'

const meta: Meta<typeof EmptyFallback> = {
  title: 'elements/EmptyFallback',
  component: EmptyFallback
}

export default meta

type Story = StoryObj<typeof EmptyFallback>

export const Default: Story = {
  args: {}
}
