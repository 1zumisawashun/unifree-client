import type { Config } from 'jest'
import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './'
})

// Add any custom config to be passed to Jest
const config: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  // Add more setup options before each test is run
  moduleNameMapper: {
    // エイリアスの追加
    '^@/(.*)$': '<rootDir>/app/$1',
    /** @see https://stackoverflow.com/questions/74899923/jest-encountered-an-unexpected-token-with-swiperjs */
    '^swiper': '<rootDir>/node_modules/swiper/swiper.min.js'
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testPathIgnorePatterns: ['<rootDir>/app/__tests__/utilities'],
  setupFiles: ['./jest.polyfills.js'],
  testEnvironmentOptions: {
    customExportConditions: ['']
  }
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config)
