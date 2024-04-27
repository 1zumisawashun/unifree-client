import { render, screen } from '@/__tests__/utilities/test-utils'
import * as stories from '@/components/buttons/IconButton/index.stories'
import { composeStories } from '@storybook/react'

describe('IconButtonコンポーネントの単体テスト', () => {
  const { Default } = composeStories(stories)

  const setup = ({ disabled = false }: { disabled?: boolean }) => {
    const onClick = jest.fn()
    const { user } = render(<Default onClick={onClick} disabled={disabled} />)
    const button = screen.getByRole('button', { name: 'add' })
    return { button, user, onClick }
  }

  it('正しくレンダリングされるか', () => {
    // arrange
    const { button } = setup({})
    // act

    // assert
    expect(button).toBeInTheDocument()
  })

  it('ボタン固有の属性(disabled)が正しく適用されるか', () => {
    // arrange
    const { button } = setup({ disabled: true })
    // act

    // assert
    /** @see https://github.com/testing-library/jest-dom/issues/144 */
    expect(button).toHaveAttribute('aria-disabled', 'true')
  })

  it('クリック時にonClickイベントハンドラがトリガーされるか', async () => {
    // arrange
    const { user, button, onClick } = setup({})
    // act
    await user.click(button)
    // assert
    expect(onClick).toHaveBeenCalled()
  })
})
