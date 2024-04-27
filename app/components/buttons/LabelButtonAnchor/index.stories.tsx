import type { Meta, StoryObj } from '@storybook/react'

import { LabelButtonAnchor } from './index'

const meta: Meta<typeof LabelButtonAnchor> = {
  title: 'buttons/LabelButtonAnchor',
  component: LabelButtonAnchor
}

export default meta

type Story = StoryObj<typeof LabelButtonAnchor>

export const Default: Story = {
  args: {
    theme: 'primary',
    children: 'LabelButtonAnchor',
    href: '/'
  }
}
