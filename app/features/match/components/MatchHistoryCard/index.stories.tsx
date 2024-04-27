import type { Meta, StoryObj } from '@storybook/react'

import { MatchHistoryCard } from '@/features/match/components/MatchHistoryCard'
import { ComponentProps } from 'react'

import {
  mixMesagges,
  onlyCurrentUserMessages,
  onlyOpponentUserMessages
} from '@/__tests__/utilities/message.mock'

const meta: Meta<typeof MatchHistoryCard.List> = {
  title: 'features/match/MatchHistoryCard',
  component: MatchHistoryCard.List,
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

type Story = StoryObj<typeof MatchHistoryCard.List>

const MatchHistoryCardList = (
  props: ComponentProps<typeof MatchHistoryCard.List>
) => {
  return <MatchHistoryCard.List {...props} />
}

export const Primary: Story = {
  args: {
    messages: mixMesagges,
    userId: 1,
    matchId: 1
  },
  render: (args) => <MatchHistoryCardList {...args} />
}

export const OnlyCurrentUser: Story = {
  args: {
    messages: onlyCurrentUserMessages,
    userId: 1,
    matchId: 1
  },
  render: (args) => <MatchHistoryCardList {...args} />
}

export const OnlyOpponentUser: Story = {
  args: {
    messages: onlyOpponentUserMessages,
    userId: 1,
    matchId: 1
  },
  render: (args) => <MatchHistoryCardList {...args} />
}
