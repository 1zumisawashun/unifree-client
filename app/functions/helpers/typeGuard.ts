const isString = (value: unknown): value is string => {
  return typeof value === 'string'
}

function isNumber(value: any): value is number {
  return typeof value === 'number'
}

/** @see https://zenn.dev/oreo2990/articles/5f75eaa285f2f9#5-%E5%9E%8B%E3%82%AC%E3%83%BC%E3%83%89%E3%81%AE%E5%A4%89%E6%95%B0%E4%BB%A3%E5%85%A5 */
/** TypeScript4.4以降で使用可能な機能になりますが、型ガードに変数を使うことができます。 */
const isFile = (file: unknown): file is File => {
  return file instanceof File
}

export { isFile, isNumber, isString }
