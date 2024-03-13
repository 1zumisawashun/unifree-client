import { useActiveStep } from '@/functions/hooks/useActiveStep'
import { act, renderHook } from '@testing-library/react'

describe('useActiveStepの単体テスト', () => {
  test('初期値が10に設定されている', () => {
    // arrange
    const initial = 10
    const { result } = renderHook(() => useActiveStep(initial))
    // assert
    expect(result.current.activeStep).toBe(10)
  })

  test('nextを実行するとactiveStepが増える', () => {
    // arrange
    const { result } = renderHook(() => useActiveStep(10))
    // act
    act(() => result.current.next())
    // assert
    expect(result.current.activeStep).toBe(11)
  })

  test('backを実行するとactiveStepが減る', () => {
    // arrange
    const { result } = renderHook(() => useActiveStep(10))
    // act
    act(() => result.current.back())
    // assert
    expect(result.current.activeStep).toBe(9)
  })

  test('resetを実行するとactiveStepが0になる', () => {
    // arrange
    const { result } = renderHook(() => useActiveStep(10))
    // act
    act(() => result.current.reset())
    // assert
    expect(result.current.activeStep).toBe(0)
  })
})
