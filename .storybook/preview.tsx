import '@/assets/styles/generics/custom-reset.css'
import '@/assets/styles/generics/the-new-css-reset.css'
import type { Preview } from '@storybook/react'

/** @see https://stackoverflow.com/questions/76933793/how-to-write-decorator-in-typescript-for-storybook */
import React from 'react'

const preview: Preview = {
  decorators: [
    (Story) => (
      <div style={{ width: '576px' }}>
        <Story />
      </div>
    )
  ],
  parameters: {
    nextjs: {
      /**
       * next/navigationを有効にする場合下記のセットアップが必要になる
       * @see https://storybook.js.org/docs/get-started/nextjs#set-nextjsappdirectory-to-true
       */
      appDirectory: true
    },
    // actions: { argTypesRegex: '^on[A-Z].*' }, // v8へ挙げた時にコメントアウトした
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
    /** @see https://storybook.js.org/docs/essentials/viewport */
    // viewport: {
    //   viewports: {
    //     ...INITIAL_VIEWPORTS,
    //     ...MINIMAL_VIEWPORTS
    //   },
    //   defaultViewport: 'iphone14promax'
    // }
  }
}

export default preview
