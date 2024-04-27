import { Button } from '@/components/buttons/Button'
import { useDialog } from '@/functions/hooks/useDialog'
import type { Meta, StoryObj } from '@storybook/react'
import { ComponentProps } from 'react'
import { PreviewDialog } from './index'

const meta: Meta<typeof PreviewDialog> = {
  title: 'elements/PreviewDialog',
  component: PreviewDialog
}

export default meta

type Story = StoryObj<typeof PreviewDialog>

const Render = (props: ComponentProps<typeof PreviewDialog>) => {
  const dialog = useDialog()
  return (
    <>
      <Button onClick={dialog.open}>Preview Dialog</Button>
      <PreviewDialog {...props} dialog={dialog} />
    </>
  )
}

const images = [
  { id: 1, name: 'image1', src: 'https://via.placeholder.com/500' },
  { id: 2, name: 'image2', src: 'https://via.placeholder.com/500' },
  { id: 3, name: 'image3', src: 'https://via.placeholder.com/500' }
]

export const Default: Story = {
  args: { images },
  render: (args) => <Render {...args} />
}
