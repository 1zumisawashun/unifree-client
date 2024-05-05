'use client'

import { Toast } from './Toast'
import { ToastActionContext, ToastStateContext } from './toastContext'
import { useToastProvider } from './useToastProvider'

export const ToastProviderV2 = ({
  children
}: {
  children: React.ReactNode
}) => {
  const {
    isShown,
    theme,
    message,
    showToast,
    closeToast,
    setIsShowWithTimeout,
    resetTimeout
  } = useToastProvider()
  return (
    <ToastStateContext.Provider value={{ isShown, theme, message }}>
      <ToastActionContext.Provider
        value={{ showToast, closeToast, setIsShowWithTimeout, resetTimeout }}
      >
        {isShown && <Toast theme={theme} message={message} />}
        {children}
      </ToastActionContext.Provider>
    </ToastStateContext.Provider>
  )
}
