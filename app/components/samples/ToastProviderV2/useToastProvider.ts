import { ToastStateContext } from '@/components/samples/ToastProviderV2/toastContext'
import { useCallback, useEffect, useRef, useState } from 'react'

export function useToastProvider() {
  const [{ message, theme, isShown }, setToast] = useState<ToastStateContext>({
    message: '',
    theme: 'success',
    isShown: false
  })

  const timer = useRef<ReturnType<typeof setTimeout>>()

  const showToast = useCallback((toast: Omit<ToastStateContext, 'isShown'>) => {
    clearTimeout(timer.current)
    setToast((prev) => ({ ...prev, ...toast, isShown: true }))
  }, [])

  const closeToast = useCallback(() => {
    clearTimeout(timer.current)
    setToast((prev) => ({ ...prev, isShown: false }))
  }, [])

  useEffect(() => {
    if (!isShown) return
    timer.current = setTimeout(() => {
      setToast((prev) => ({ ...prev, isShown: false }))
    }, 2000)
  }, [isShown])

  const setIsShowWithTimeout = useCallback(() => {
    if (timer.current === undefined && isShown) {
      timer.current = setTimeout(() => {
        setToast((prev) => ({ ...prev, isShown: false }))
      }, 2000)
    }
  }, [isShown])

  const resetTimeout = useCallback(() => {
    if (timer.current) {
      clearTimeout(timer.current)
      timer.current = undefined
    }
  }, [])

  useEffect(() => {
    setIsShowWithTimeout()
    return () => resetTimeout()
  }, [setIsShowWithTimeout, resetTimeout])

  return {
    message,
    theme,
    isShown,
    showToast,
    closeToast,
    setIsShowWithTimeout,
    resetTimeout
  }
}
