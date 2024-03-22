// import { render, screen } from '@/__tests__/utilities/test-utils'
// import { ProductForm } from '@/features/product/components/ProductForm'
// import { productEntity } from '@/features/product/product.schema'

// const categoryOptions = [
//   { value: 1, label: 'category1' },
//   { value: 2, label: 'category2' }
// ]
// describe('test for product-form-component', () => {
//   // NOTE:普通の要素取得
//   it('check product create', async () => {
//     const mockSave = jest.fn()
//     const { user } = render(
//       <ProductForm
//         submit={mockSave}
//         product={productEntity}
//         href={'/products'}
//         domain="作成する"
//         isPending={false}
//         categoryOptions={categoryOptions}
//       />
//     )

//     const name = screen.getByRole('textbox', { name: '商品名 必須' })
//     await user.type(name, 'サンプル')

//     const price = screen.getByRole('textbox', { name: '価格 必須' })
//     await user.type(price, '1111')

//     const description = screen.getByRole('textbox', { name: '詳細情報 必須' })
//     await user.type(description, 'サンプル')

//     const status = screen.getByRole('checkbox', { name: '必須' })
//     await user.click(status)

//     expect(name).toBeInTheDocument()
//   })
// })
