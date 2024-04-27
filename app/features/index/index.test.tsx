import { mockRouter } from '@/__tests__/utilities/next-router-utils'
import { render, screen, waitFor } from '@/__tests__/utilities/test-utils'
import { composeStories } from '@storybook/react'
import * as stories from './index.stories'

describe('Indexコンポーネントのインテグレーションテスト', () => {
  const { Primary } = composeStories(stories)

  const setup = () => {
    const { user } = render(<Primary />)

    const heading = screen.getByRole('heading', {
      name: /必要なものを必要な人へ あなたの要らないが誰かの役に立つ/i
    })
    const link = screen.getByRole('link', { name: '教科書を探す' })
    return { user, heading, link }
  }

  it('check heading', () => {
    // arrange
    const { heading } = setup()
    // act

    // assert
    expect(heading).toBeInTheDocument()
  })

  it('check next link', async () => {
    // arrange
    const { user, link } = setup()
    // act
    await user.click(link)
    // assert
    await waitFor(() =>
      expect(mockRouter).toMatchObject({ pathname: '/products' })
    )
  })
})
