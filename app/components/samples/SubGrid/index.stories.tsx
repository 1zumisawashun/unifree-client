import type { Meta, StoryObj } from '@storybook/react'

import { SubGrid } from './index'

const meta: Meta<typeof SubGrid> = {
  title: 'samples/SubGrid',
  component: SubGrid
}

export default meta

type Story = StoryObj<typeof SubGrid>

export const Default: Story = {
  args: {}
}
