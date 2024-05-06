'use client'

import { ThemeType } from '@/functions/types/Common'
import { createContext } from 'react'

export type ToastStateContext = {
  message: string
  theme: ThemeType
  isShown: boolean
}

export const ToastStateContext = createContext<ToastStateContext>({
  message: '',
  theme: 'success',
  isShown: false
})

type ToastActionContext = {
  showToast: (toast: Omit<ToastStateContext, 'isShown'>) => void
  closeToast: () => void
  setIsShowWithTimeout: () => void
  resetTimeout: () => void
}

export const ToastActionContext = createContext<ToastActionContext>({
  showToast: () => {},
  closeToast: () => {},
  setIsShowWithTimeout: () => {},
  resetTimeout: () => {}
})
