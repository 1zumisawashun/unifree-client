import type { Meta, StoryObj } from '@storybook/react'

import { IconButton } from '@/components/buttons/IconButton'
import { Tooltip } from '@/components/elements/Tooltip'
import { ComponentProps, useRef } from 'react'

const meta: Meta<typeof Tooltip> = {
  title: 'elements/Tooltip',
  component: Tooltip
}

export default meta

type Story = StoryObj<typeof Tooltip>

const Render = (props: ComponentProps<typeof Tooltip>) => {
  const referenceRef = useRef<HTMLButtonElement>(null)

  return (
    <>
      <IconButton
        name="detail"
        ref={referenceRef}
        onClick={(e) => e.stopPropagation()}
      />
      <Tooltip {...props} referenceRef={referenceRef}>
        {props.children}
      </Tooltip>
    </>
  )
}

export const Default: Story = {
  args: {
    placement: 'bottom',
    children: 'tooltip'
  },
  render: (args) => <Render {...args} />
}
