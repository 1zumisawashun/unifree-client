import type { Meta, StoryObj } from '@storybook/react'

import { Toast } from '@/components/elements/Toast'
import { ComponentProps } from 'react'

const meta: Meta<typeof Toast> = {
  title: 'elements/Toast',
  component: Toast
}

export default meta

type Story = StoryObj<typeof Toast>

const Render = (props: ComponentProps<typeof Toast>) => {
  return <Toast {...props} />
}

export const Default: Story = {
  args: {
    isShow: true,
    toast: {
      message: 'カートに追加しました',
      theme: 'success'
    },
    closeToast: () => {},
    focusEvent: {
      setIsShowWithTimeout: () => {},
      resetTimeout: () => {}
    }
  },
  render: (args) => <Render {...args} />
}

export const DefaultWithoutCloseButton: Story = {
  args: {
    isShow: true,
    toast: {
      message: 'カートに追加しました',
      theme: 'success'
    },
    closeToast: undefined,
    focusEvent: {
      setIsShowWithTimeout: () => {},
      resetTimeout: () => {}
    }
  },
  render: (args) => <Render {...args} />
}
