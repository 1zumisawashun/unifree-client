import type { Meta, StoryObj } from '@storybook/react'
import { ComponentProps } from 'react'

import { Panel } from './index'

const meta: Meta<typeof Panel.Flame> = {
  title: 'elements/Panel',
  component: Panel.Flame
}

export default meta

type Story = StoryObj<typeof Panel.Flame>

const Render = (props: ComponentProps<typeof Panel.Flame>) => {
  return (
    <Panel.Flame {...props}>
      <Panel.Inner>{props.children}</Panel.Inner>
    </Panel.Flame>
  )
}

export const Default: Story = {
  args: {
    hasBorder: true,
    theme: 'transparent',
    children: 'Panel',
    scrollable: false
  },
  render: (args) => <Render {...args} />
}
