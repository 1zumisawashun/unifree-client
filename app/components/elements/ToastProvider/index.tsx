'use client'

import { Toast } from '@/components/elements/Toast'
import { PositionOffset, ThemeType } from '@/functions/types/Common'
import { createContext, useCallback, useEffect, useRef, useState } from 'react'

export type Toast = {
  message: string
  theme: ThemeType
}

interface ToastContext {
  showToast: (toast: Toast) => void
  closeToast: () => void
}

export const ToastContext = createContext<ToastContext>({
  showToast: () => {},
  closeToast: () => {}
})

export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const [toast, setToast] = useState<Toast>({
    message: '',
    theme: 'success'
  })
  const [isShow, setIsShow] = useState<boolean>(false)

  const timer = useRef<ReturnType<typeof setTimeout>>()

  const showToast = useCallback((toast: Toast) => {
    clearTimeout(timer.current)
    setToast(toast)
    setIsShow(true)
  }, [])

  const closeToast = useCallback(() => {
    clearTimeout(timer.current)
    setIsShow(false)
  }, [])

  useEffect(() => {
    if (!isShow) return
    timer.current = setTimeout(() => {
      setIsShow(false)
    }, 2000)
  }, [isShow])

  const setIsShowWithTimeout = useCallback(() => {
    if (timer.current === undefined && isShow) {
      timer.current = setTimeout(() => {
        setIsShow(false)
      }, 2000)
    }
  }, [isShow])

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

  const offset: PositionOffset = {
    top: 24,
    left: 32,
    right: 32,
    bottom: 24
  }

  const props = {
    isShow,
    offset,
    toast,
    closeToast,
    focusEvent: {
      setIsShowWithTimeout,
      resetTimeout
    }
  }

  return (
    <ToastContext.Provider value={{ showToast, closeToast }}>
      {isShow && <Toast {...props} />}
      {children}
    </ToastContext.Provider>
  )
}
