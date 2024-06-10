import type { Meta, StoryObj } from '@storybook/react'

import { AccordionV2 } from './index'

const meta: Meta<typeof AccordionV2> = {
  title: 'samples/AccordionV2',
  component: AccordionV2
}

export default meta

type Story = StoryObj<typeof AccordionV2>

export const Primary: Story = {
  args: {}
}
