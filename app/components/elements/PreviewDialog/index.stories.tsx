import { images } from '@/__tests__/utilities/image.mock'
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

export const Default: Story = {
  args: { images },
  render: (args) => <Render {...args} />
}
