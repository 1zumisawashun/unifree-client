export const delay = (time?: number) => {
  const _time = time || 3000
  return new Promise((resolve) => {
    setTimeout(resolve, _time)
  })
}
