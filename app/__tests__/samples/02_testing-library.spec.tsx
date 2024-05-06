import { Hello } from '@/__tests__/utilities/Component'
import { render, screen } from '@/__tests__/utilities/test-utils'

describe('testing-libraryの単体テスト', () => {
  // NOTE:普通の要素取得
  it('try getByText', () => {
    render(<Hello />)
    const element = screen.getByText('Hello')
    expect(element).toBeInTheDocument()
  })

  // NOTE:取得できない場合はnullを返す（処理がストップしない）
  it('try queryByText', () => {
    render(<Hello />)
    const element = screen.queryByText('hey')
    expect(element).not.toBeInTheDocument()
  })

  // NOTE:findByTextの返り値がPromiseなのでasync/awaitが必要になる
  it('try renders Hello', async () => {
    render(<Hello />)
    const element = await screen.findByText('Hello')
    expect(element).toBeInTheDocument()
  })
})
