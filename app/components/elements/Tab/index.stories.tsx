import type { Meta, StoryObj } from '@storybook/react'

import { Tab } from './index'

const meta: Meta<typeof Tab> = {
  title: 'elements/Tab',
  component: Tab
}

export default meta

type Story = StoryObj<typeof Tab>

export const Default: Story = {
  args: {
    items: [
      { value: 'FAQ', href: '/help/faq' },
      { value: 'Terms', href: '/help/tos' }
    ]
  }
}
