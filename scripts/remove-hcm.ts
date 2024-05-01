/**
 * @description 以下を参照しています
 * @see https://zenn.dev/yumemi_inc/articles/make-css-modules-happy
 */

const fs = require('fs')
const path = require('path')

// ディレクトリ内のファイルを再帰的に探索する関数
function deleteFilesInDirectory(startPath: string, filter: RegExp): void {
  if (!fs.existsSync(startPath)) {
    console.log('Directory does not exist: ', startPath)
    return
  }

  const files = fs.readdirSync(startPath)
  for (let i = 0; i < files.length; i++) {
    const filename = path.join(startPath, files[i] ?? '')
    const stat = fs.lstatSync(filename)
    if (stat.isDirectory()) {
      deleteFilesInDirectory(filename, filter) // 再帰的にサブディレクトリを探索

      // サブディレクトリが空の場合、削除
      if (!fs.readdirSync(filename).length) fs.rmdirSync(filename)
    } else if (filter.test(filename)) {
      console.log('Deleting file: ', filename)
      fs.unlinkSync(filename) // ファイルを削除
    }
  }
}

// ここで対象のディレクトリとフィルターを設定
const targetDirectory = './app' // 探索するディレクトリのパス
const fileExtensionRegex = /\.module\.scss\.d\.ts(\.map)?$/ // 削除するファイルの拡張子の正規表現

// 関数を実行して指定した拡張子のファイルを削除
deleteFilesInDirectory(targetDirectory, fileExtensionRegex)
