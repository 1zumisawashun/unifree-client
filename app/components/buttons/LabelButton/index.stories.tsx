import type { Meta, StoryObj } from '@storybook/react'

import { LabelButton } from './index'

const meta: Meta<typeof LabelButton> = {
  title: 'buttons/LabelButton',
  component: LabelButton
}

export default meta

type Story = StoryObj<typeof LabelButton>

export const Default: Story = {
  args: {
    theme: 'primary',
    children: 'LabelButton'
  }
}
