import type { Meta, StoryObj } from '@storybook/react'

import { LoadingSpinner } from './index'

const meta: Meta<typeof LoadingSpinner> = {
  title: 'elements/LoadingSpinner',
  component: LoadingSpinner
}

export default meta

type Story = StoryObj<typeof LoadingSpinner>

export const Default: Story = {
  args: {}
}
