import { render, screen } from '@/__tests__/utilities/test-utils'
import { ProductForm } from '@/features/product/components/ProductForm'
import { productEntity } from '@/features/product/product.schema'

const options = [
  { value: 1, label: 'option1' },
  { value: 2, label: 'option2' },
  { value: 2, label: 'option3' }
]

// FIXME: 暫定なので後で修正
describe('ProductFormのインテグレーションテスト', () => {
  it('商品を作成する', async () => {
    // arrange
    const handleClick = jest.fn()
    const { user } = render(
      <ProductForm
        submit={handleClick}
        product={productEntity}
        href={'/products'}
        domain="作成する"
        isPending={false}
        categoryOptions={options}
      />
    )
    const name = screen.getByRole('textbox', { name: '商品名 必須' })
    const price = screen.getByRole('textbox', { name: '価格 必須' })
    const description = screen.getByRole('textbox', { name: '詳細情報 必須' })
    const status = screen.getByLabelText('販売中')
    const paymentMethod = screen.getByLabelText('手渡し')
    const categories = screen.getByLabelText('option1')
    const submit = screen.getByRole('button')

    // act
    await user.type(name, 'サンプル')
    await user.type(price, '1111')
    await user.type(description, 'サンプル')
    await user.click(status)
    await user.click(paymentMethod)
    await user.click(categories)

    await user.click(submit)

    // assert
    expect(handleClick).toHaveBeenCalled()
  })
})
