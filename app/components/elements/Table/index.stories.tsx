import { images } from '@/__tests__/utilities/image.mock'
import type { Meta, StoryObj } from '@storybook/react'

import { Table } from '@/components/elements/Table'
import Image from 'next/image'

const meta: Meta<typeof Table> = {
  title: 'elements/Table',
  component: Table
}

export default meta

type Story = StoryObj<typeof Table>

const Render = (props: (typeof images)[number]) => {
  return <Image src={props.src} alt={props.name} width={300} height={300} />
}

export const Default: Story = {
  args: {
    rows: images,
    render: (props) => <Render {...(props as (typeof images)[number])} />
  },
  parameters: {
    layout: 'centered'
  }
}
