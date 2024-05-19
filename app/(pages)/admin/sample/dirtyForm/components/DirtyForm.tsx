'use client'

import { Button } from '@/components/buttons'
import { InputText } from '@/components/forms'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'

export const DirtyForm = () => {
  const { register, handleSubmit, formState, setValue } = useForm({
    mode: 'onChange',
    defaultValues: { name: '' }
  })

  const { errors } = formState

  useEffect(() => {
    console.log('isDirty:', formState.isDirty)
    console.log('dirtyFields:', formState.dirtyFields)
  }, [formState])

  const onSubmit = (data: any) => console.log(data)

  const onError = (errors: any) => console.log(errors)

  return (
    <div>
      <h1>Dirty Form</h1>
      <InputText
        label="name"
        isRequired
        error={errors.name?.message}
        {...register('name')}
      />
      <Button onClick={() => setValue('name', 'change', { shouldDirty: true })}>
        next
      </Button>
      {/* <Button
        onClick={() => setValue('name', undefined, { shouldDirty: true })}
      >
        back
      </Button> */}
      <Button onClick={handleSubmit(onSubmit, onError)}>Submit</Button>
    </div>
  )
}
