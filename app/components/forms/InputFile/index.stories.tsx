import type { Meta, StoryObj } from '@storybook/react'

import { InputFile } from '@/components/forms/InputFile'
import { useArrayState } from '@/functions/hooks/useArrayState'
import { Image } from '@/functions/types/Prisma'
import { ComponentProps } from 'react'

const meta: Meta<typeof InputFile> = {
  title: 'forms/InputFile',
  component: InputFile
}

export default meta

type Story = StoryObj<typeof InputFile>

const Render = (props: ComponentProps<typeof InputFile>) => {
  const [files, setFiles] = useArrayState<File | Image>()
  return <InputFile {...props} state={files} setState={setFiles} />
}

export const Default: Story = {
  args: {},
  render: (args) => <Render {...args} />
}
