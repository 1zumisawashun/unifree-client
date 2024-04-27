import type { Meta, StoryObj } from '@storybook/react'

import { ErrorFallback } from './index'

const meta: Meta<typeof ErrorFallback> = {
  title: 'elements/ErrorFallback',
  component: ErrorFallback
}

export default meta

type Story = StoryObj<typeof ErrorFallback>

export const Default: Story = {
  args: {}
}
