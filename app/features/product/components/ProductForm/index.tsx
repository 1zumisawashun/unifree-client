import { Button, ButtonAnchor, ButtonWrapper } from '@/components/buttons'
import { Panel } from '@/components/elements/Panel'
import {
  InputCheckbox,
  InputFile,
  InputMultiple,
  InputRadio,
  InputText,
  InputTextarea
} from '@/components/forms'
import {
  UpsertProduct,
  zUpsertProduct
} from '@/features/product/product.schema'
import {
  paymentMethodOptions,
  statusOptions
} from '@/functions/constants/options'
import { useArrayState } from '@/functions/hooks/useArrayState'
import { Image } from '@/functions/types/Prisma'
import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form'
import styles from './styles.module.scss'

const BLOCK_NAME = 'product-form'

export const ProductForm = ({
  product,
  submit,
  href,
  domain,
  isPending,
  categoryOptions
}: {
  product: UpsertProduct
  submit: (data: UpsertProduct) => void
  href: string
  domain: '作成する' | '変更する'
  isPending: boolean
  categoryOptions: { value: number; label: string }[]
}) => {
  const [files, setFiles] = useArrayState<File | Image>(product.files)

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<UpsertProduct>({
    resolver: zodResolver(zUpsertProduct),
    mode: 'onChange',
    defaultValues: product
  })

  const onSubmit: SubmitHandler<UpsertProduct> = (data) => {
    submit({ ...data, files })
  }

  const onError: SubmitErrorHandler<UpsertProduct> = (errors) => {
    console.log(errors)
  }

  return (
    <Panel.Flame hasBorder>
      <div className={styles[`${BLOCK_NAME}-container`]}>
        <Panel.Inner>
          <InputText
            label="商品名"
            isRequired
            error={errors.name?.message}
            {...register('name')}
          />
          <InputText
            label="価格"
            isRequired
            error={errors.price?.message}
            {...register('price')}
          />
          <InputTextarea
            label="詳細情報"
            isRequired
            description="商品の詳細情報を入力してください"
            error={errors.description?.message}
            {...register('description')}
          />
          <InputFile
            label="画像"
            isOptioned
            description={`最大で4枚まで画像アップロードできます
            画像なしの場合はダミー画像が挿入されます`}
            state={files}
            setState={setFiles}
          />
          <InputMultiple
            label="ステータス"
            description="商品一覧の表示を変えることができます"
            isRequired
            error={errors.status?.message}
            rows={statusOptions}
            render={(option) => (
              <InputRadio {...register('status')} value={option.value}>
                {option.label}
              </InputRadio>
            )}
          />
          <InputMultiple
            label="支払い方法"
            isRequired
            error={errors.paymentMethod?.message}
            rows={paymentMethodOptions}
            render={(option) => (
              <InputRadio {...register('paymentMethod')} value={option.value}>
                {option.label}
              </InputRadio>
            )}
          />
          {/* https://github.com/orgs/react-hook-form/discussions/11445 */}
          <InputMultiple
            label="カテゴリー"
            description="1つ以上を選択してください"
            isRequired
            error={errors.categories?.message}
            rows={categoryOptions}
            direction="column"
            render={(option) => (
              <InputCheckbox {...register('categories')} value={option.value}>
                {option.label}
              </InputCheckbox>
            )}
          />
          <ButtonWrapper position="end">
            <ButtonAnchor href={href} variant="outlined">
              キャンセル
            </ButtonAnchor>
            <Button
              onClick={handleSubmit(onSubmit, onError)}
              loading={isPending}
            >
              {domain}
            </Button>
          </ButtonWrapper>
        </Panel.Inner>
      </div>
    </Panel.Flame>
  )
}
