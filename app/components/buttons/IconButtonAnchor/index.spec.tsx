import { mockRouter } from '@/__tests__/utilities/next-router-utils'
import { render, screen, waitFor } from '@/__tests__/utilities/test-utils'
import * as stories from '@/components/buttons/IconButtonAnchor/index.stories'
import { composeStories } from '@storybook/react'

/** @see https://stackoverflow.com/questions/57827126/how-to-test-anchors-href-with-react-testing-library */
describe('IconButtonAnchorコンポーネントの単体テスト', () => {
  const { Default } = composeStories(stories)

  const setup = () => {
    const { user } = render(<Default />)
    const link = screen.getByRole('link', { name: 'add' })
    return { link, user }
  }

  it('正しくレンダリングされるか', () => {
    // arrange
    const { link } = setup()
    // act

    // assert
    expect(link).toBeInTheDocument()
  })

  it('クリック時にページ遷移できているか', async () => {
    // arrange
    const { link, user } = setup()
    // act
    await user.click(link)
    // assert
    await waitFor(() => expect(mockRouter).toMatchObject({ pathname: '/' }))
  })
})
