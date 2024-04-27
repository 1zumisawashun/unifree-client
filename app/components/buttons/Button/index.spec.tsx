import { render, screen } from '@/__tests__/utilities/test-utils'
import * as stories from '@/components/buttons/Button/index.stories'
import { composeStories } from '@storybook/react'

describe('Buttonコンポーネントの単体テスト', () => {
  const { Default } = composeStories(stories)

  const setup = ({
    disabled = false,
    loading = false
  }: {
    disabled?: boolean
    loading?: boolean
  }) => {
    const onClick = jest.fn()
    const { user } = render(
      <Default onClick={onClick} disabled={disabled} loading={loading} />
    )
    const button = screen.queryByRole('button', { name: 'Button' })
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

  it('ボタン固有の属性(loading)が正しく適用されるか', () => {
    // arrange
    const { button } = setup({ loading: true })
    // act

    // assert
    expect(button).not.toBeInTheDocument()
  })

  it('クリック時にonClickイベントハンドラがトリガーされるか', async () => {
    // arrange
    const { user, button, onClick } = setup({})
    // act
    await user.click(button!)
    // assert
    expect(onClick).toHaveBeenCalled()
  })
})
