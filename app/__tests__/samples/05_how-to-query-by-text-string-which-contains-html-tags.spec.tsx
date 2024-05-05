import {
  HelloWorld,
  MyGreatTextComponent
} from '@/__tests__/utilities/Component'
import { render, screen } from '@/__tests__/utilities/test-utils'

const text =
  /this is text with multiple lines\. in reality, we'd have some dynamic data here\./i

describe('How to query by text string which contains html tags', () => {
  /**
   * @description How to query by text string which contains html tags?
   * @description getByTextは失敗するのでgetByRoleを使う。以下のリンクを参照
   * @see https://stackoverflow.com/questions/55509875/how-to-query-by-text-string-which-contains-html-tags-using-react-testing-library
   */
  it('getByTextで要素を取得した場合、失敗する', async () => {
    render(<HelloWorld />)
    const element = screen.queryByText('Hello world')
    expect(element).not.toBeInTheDocument()
  })

  it('getByRoleで要素を取得した場合、成功する', async () => {
    render(<HelloWorld />)
    const element = screen.getByRole('heading', { name: /hello world/i })
    expect(element).toBeInTheDocument()
  })

  it('toHaveTextContentで取得した要素が確認できる', async () => {
    render(<HelloWorld />)
    const element = screen.getByRole('heading', { name: /hello world/i })
    expect(element).toHaveTextContent('Hello world')
  })

  it('getByTextで要素を取得した場合、失敗する', async () => {
    render(<MyGreatTextComponent />)
    const element = screen.queryByText(text)
    expect(element).not.toBeInTheDocument()
  })
  it('getByRoleで要素を取得した場合、成功する', async () => {
    render(<MyGreatTextComponent />)
    const element = screen.queryByRole('heading', { name: text })
    expect(element).toBeInTheDocument()
  })
})
