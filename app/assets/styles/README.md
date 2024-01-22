# 基本的なガイドライン

- tsx ファイルにクラス名だけでスタイルを当てない
- styles.module.scss または scss ファイルにスタイルを宣言する

# CSS Modules と Sass の使い分け

- ドメインの入るスタイルは styles.module.scss として管理する
- グローバルなスタイルは通常の scss ファイルを使って app/assets/styles/で管理する

# CSS Modules

- 動的なスタイルは data-〇〇で変更する（基本的にはコンポーネント化されるはず）  
  （例:button-wrapper, button）
- 汎用的なスタイルを使用する場合は composes を使って app/assets/styles/からモディファイア（RSCSS でいうところの variants）を呼ぶ
  （例:text-normal -bold -grey）
