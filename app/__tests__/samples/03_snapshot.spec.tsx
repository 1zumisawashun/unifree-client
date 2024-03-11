import Sample from '@/__tests__/utilities/Sample'
import { render } from '@testing-library/react'

describe('snapshotの単体テスト', () => {
  it('正しくレンダリングされる', async () => {
    const { asFragment } = render(<Sample />)
    expect(asFragment()).toMatchSnapshot()
  })
})
