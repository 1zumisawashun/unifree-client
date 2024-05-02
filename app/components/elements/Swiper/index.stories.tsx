import { images } from '@/__tests__/utilities/image.mock'
import type { Meta, StoryObj } from '@storybook/react'

import { Swiper } from '@/components/elements/Swiper'
import Image from 'next/image'

const meta: Meta<typeof Swiper> = {
  title: 'elements/Swiper',
  component: Swiper
}

export default meta

type Story = StoryObj<typeof Swiper>

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
