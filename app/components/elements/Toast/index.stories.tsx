import type { Meta, StoryObj } from '@storybook/react'

import { Toast } from '@/components/elements/Toast'
import { ComponentProps } from 'react'

const meta: Meta<typeof Toast> = {
  title: 'elements/Toast',
  component: Toast,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered'
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs']
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' }
  // }
}

export default meta

type Story = StoryObj<typeof Toast>

const ToastWithHooks = (props: ComponentProps<typeof Toast>) => {
  return <Toast {...props} />
}

export const Primary: Story = {
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
  render: (args) => <ToastWithHooks {...args} />
}

export const Secondary: Story = {
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
  render: (args) => <ToastWithHooks {...args} />
}
