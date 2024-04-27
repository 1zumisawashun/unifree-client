import { mockRouter } from '@/__tests__/utilities/next-router-utils'
import {
  render,
  screen,
  waitFor,
  within
} from '@/__tests__/utilities/test-utils'
import { composeStories } from '@storybook/react'
import * as stories from './index.stories'

describe('HeaderMenuコンポーネントの単体テスト', () => {
  const { Default, DefaultNotAuth } = composeStories(stories)

  const setup = async ({ isAuthenticated }: { isAuthenticated: boolean }) => {
    const { user } = render(isAuthenticated ? <Default /> : <DefaultNotAuth />)
    const avatarButton = screen.getByRole('button', { name: 'avatar' })
    await user.click(avatarButton)
    const menu = await screen.findByRole('menu') // roleとしてmenuを当てているのでlistではない
    const menuItems = within(menu).getAllByRole('listitem') // withinでスコープを狭めてavatar-buttonを取得しないようにしている

    return { user, menuItems }
  }

  it('check open headermenu and menuitem length when is authenticated', async () => {
    // arrange
    const { menuItems } = await setup({ isAuthenticated: true })
    // act

    // assert
    expect(menuItems).toHaveLength(5)
  })

  it('check open headermenu and menuitem length when is not authenticated', async () => {
    // arrange
    const { menuItems } = await setup({ isAuthenticated: false })
    // act

    // assert
    expect(menuItems).toHaveLength(3)
  })

  it('check router push to mypage when is authenticated', async () => {
    // arrange
    const { user } = await setup({ isAuthenticated: true })
    const mypageButton = screen.getByRole('button', { name: 'マイページ' })
    // act
    await user.click(mypageButton)
    // assert
    await waitFor(() =>
      expect(mockRouter).toMatchObject({ pathname: '/mypage/setting' })
    )
  })

  it('check router push to mypage when is not authenticated', async () => {
    // arrange
    await setup({ isAuthenticated: false })
    const mypageButton = screen.queryByRole('button', { name: 'マイページ' })
    // act

    // assert
    expect(mypageButton).toBeNull()
  })
})
