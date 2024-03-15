import { Button, ButtonWrapper } from '@/components/buttons'
import { Panel } from '@/components/elements/Panel'
import { InputText } from '@/components/forms'
import { createPrismaCategory } from '@/features/admin/AdminCategory/components/CategoryForm/hooks/createPrismaCategory'
import { UpsertCategory, zUpsertCategory } from '@/features/admin/admin.schema'
import { useServerAction } from '@/functions/hooks/useServerAction'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form'
import styles from './styles.module.scss'

const BLOCK_NAME = 'category-form'

export const CategoryForm = () => {
  const router = useRouter()
  const { isPending, serverAction } = useServerAction()

  const submit = async (data: UpsertCategory) => {
    try {
      const response = await serverAction(() =>
        createPrismaCategory({ ...data })
      )

      if (!response.ok) throw new Error('Failed to create product')

      router.refresh()
    } catch (error) {
      console.log(error)
    }
  }

  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors }
  } = useForm<UpsertCategory>({
    resolver: zodResolver(zUpsertCategory),
    mode: 'onChange'
  })

  const onSubmit: SubmitHandler<UpsertCategory> = (data) => {
    submit(data)
    resetField('name')
  }

  const onError: SubmitErrorHandler<UpsertCategory> = (errors) => {
    console.log(errors)
  }

  return (
    <Panel.Flame hasBorder>
      <div className={styles[`${BLOCK_NAME}-container`]}>
        <Panel.Inner>
          <InputText
            label="カテゴリー名"
            isRequired
            error={errors.name?.message}
            {...register('name')}
          />
          <ButtonWrapper position="end">
            <Button
              onClick={handleSubmit(onSubmit, onError)}
              loading={isPending}
            >
              追加する
            </Button>
          </ButtonWrapper>
        </Panel.Inner>
      </div>
    </Panel.Flame>
  )
}
