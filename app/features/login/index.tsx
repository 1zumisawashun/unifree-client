'use client'

import { ErrorDialog } from '@/components/elements/ErrorDialog'
import { LoadingSpinner } from '@/components/elements/LoadingSpinner'
import { Panel } from '@/components/elements/Panel'
import { LoginBody } from '@/features/login/components/LoginBody'
import { loginByFirebaseAuth } from '@/functions/helpers/firebaseAuth'
import { loginByNextAuth } from '@/functions/helpers/nextAuth/client'
import { useDialog } from '@/functions/hooks/useDialog'
import { useState } from 'react'

export function Login() {
  const dialog = useDialog()

  const [message, setMessage] = useState('')
  const [isPending, setIsPending] = useState(false)

  const hasIdToken = (value: any): value is { ok: boolean; idToken: string } =>
    value.ok

  const login = async (method: 'google' | 'microsoft') => {
    setIsPending(true)

    try {
      const response = await loginByFirebaseAuth(method)
      if (hasIdToken(response)) {
        await loginByNextAuth(response.idToken) // トップページへリダイレクトされる
      } else {
        throw new Error(response.message)
      }
    } catch (error) {
      if (error instanceof Error) {
        setMessage(error.message)
      }
      dialog.open()
    } finally {
      setIsPending(false)
    }
  }

  return (
    <>
      <Panel.Flame hasBorder shape="round">
        <Panel.Inner>
          <LoginBody login={login} />
        </Panel.Inner>
      </Panel.Flame>
      <ErrorDialog dialog={dialog} message={message} domain="ログイン" />
      {isPending && <LoadingSpinner />}
    </>
  )
}
