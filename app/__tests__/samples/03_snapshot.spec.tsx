import { Hello } from '@/__tests__/utilities/Component'
import { render } from '@testing-library/react'

describe('snapshotの単体テスト', () => {
  it('正しくレンダリングされる', async () => {
    const { asFragment } = render(<Hello />)
    expect(asFragment()).toMatchSnapshot()
  })
})
