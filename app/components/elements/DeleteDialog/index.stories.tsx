import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '@/components/buttons/Button'
import { useDialog } from '@/functions/hooks/useDialog'
import { DeleteDialog } from './index'

const meta: Meta<typeof DeleteDialog> = {
  title: 'elements/DeleteDialog',
  component: DeleteDialog
}

export default meta

type Story = StoryObj<typeof DeleteDialog>

const Render = () => {
  const dialog = useDialog()
  return (
    <>
      <Button onClick={dialog.open}>Delete Dialog</Button>
      <DeleteDialog dialog={dialog} submit={() => null} />
    </>
  )
}

export const Default: Story = {
  render: () => <Render />
}
