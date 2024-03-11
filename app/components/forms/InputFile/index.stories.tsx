import type { Meta, StoryObj } from '@storybook/react'

import { InputFile } from '@/components/forms/InputFile'
import { useArrayState } from '@/functions/hooks/useArrayState'
import { Image } from '@/functions/types/Prisma'
import { ComponentProps } from 'react'

const meta: Meta<typeof InputFile> = {
  title: 'forms/InputFile',
  component: InputFile,
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

type Story = StoryObj<typeof InputFile>

const InputFileWithHooks = (props: ComponentProps<typeof InputFile>) => {
  const [files, setFiles] = useArrayState<File | Image>()
  return <InputFile {...props} state={files} setState={setFiles} />
}

export const Primary: Story = {
  args: {},
  render: (args) => <InputFileWithHooks {...args} />
}
