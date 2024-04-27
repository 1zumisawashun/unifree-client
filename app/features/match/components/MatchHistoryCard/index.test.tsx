import { render, screen, within } from '@/__tests__/utilities/test-utils'
import { composeStories } from '@storybook/react'
import * as stories from './index.stories'

describe('MatchHistoryCardコンポーネントの単体テスト', () => {
  const { Primary, OnlyOpponentUser } = composeStories(stories)

  it('正しくレンダリングされる', () => {
    // arrange
    render(<Primary />)
    const list = screen.getByRole('list')
    const items = within(list).getAllByRole('listitem')
    // act

    // assert
    expect(items).toHaveLength(2)
  })

  it('OpponentUserのメッセージが正しくレンダリングできている', () => {
    // arrange
    render(<OnlyOpponentUser />)
    const list = screen.getByRole('list')
    const image = within(list).getByRole('img')
    // act

    // assert
    expect(image).toBeInTheDocument()
  })
})
