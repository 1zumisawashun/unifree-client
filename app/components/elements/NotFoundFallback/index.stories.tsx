import type { Meta, StoryObj } from '@storybook/react'

import { NotFoundFallback } from './index'

const meta: Meta<typeof NotFoundFallback> = {
  title: 'elements/NotFoundFallback',
  component: NotFoundFallback
}

export default meta

type Story = StoryObj<typeof NotFoundFallback>

export const Default: Story = {
  args: {}
}
