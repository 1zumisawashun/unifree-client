// import API mocking utilities from Mock Service Worker.
import { http, HttpResponse } from 'msw'
import { setupServer } from 'msw/node'
// import testing utilities
import { Login } from '../utilities/Component'
import { render, screen } from '../utilities/test-utils'

/**
 * テストの骨子は以下を参考にしている
 * @see https://github.com/testing-library/react-testing-library?tab=readme-ov-file#complex-example
 *
 * init
 * @see https://mswjs.io/docs/cli/init/
 *
 * Request/Response/TextEncoder is not defined (Jest)
 * @see https://mswjs.io/docs/faq/#requestresponsetextencoder-is-not-defined-jest
 *
 * Cannot find module ‘msw/node’ (JSDOM)
 * @see https://mswjs.io/docs/migrations/1.x-to-2.x/#cannot-find-module-mswnode-jsdom
 */

const fakeUserResponse = { token: 'fake_user_token' }

const server = setupServer(
  http.post('/api/login', () => {
    return HttpResponse.json(fakeUserResponse)
  })
)

beforeAll(() => server.listen())
afterEach(() => {
  server.resetHandlers()
  window.localStorage.removeItem('token')
})
afterAll(() => server.close())

describe('msw sample test', () => {
  const setup = () => {
    const { user } = render(<Login />)
    const usernameInput = screen.getByLabelText(/username/i)
    const passwordInput = screen.getByLabelText(/password/i)
    const submitButton = screen.getByText(/submit/i)
    return { user, usernameInput, passwordInput, submitButton }
  }
  test('allows the user to login successfully', async () => {
    // arrange
    const { user, usernameInput, passwordInput, submitButton } = setup()

    // act
    await user.type(usernameInput, 'chuck')
    await user.type(passwordInput, 'norris')
    await user.click(submitButton)

    // just like a manual tester, we'll instruct our test to wait for the alert
    // to show up before continuing with our assertions.
    const alert = await screen.findByRole('alert')

    // .toHaveTextContent() comes from jest-dom's assertions
    // otherwise you could use expect(alert.textContent).toMatch(/congrats/i)
    // but jest-dom will give you better error messages which is why it's recommended
    expect(alert).toHaveTextContent(/congrats/i)
    expect(window.localStorage.getItem('token')).toEqual(fakeUserResponse.token)
  })

  test('handles server exceptions', async () => {
    // mock the server error response for this test suite only.
    server.use(
      http.post('/api/login', async () => {
        return HttpResponse.error()
      })
    )

    // arrange
    const { user, usernameInput, passwordInput, submitButton } = setup()

    // act
    await user.type(usernameInput, 'chuck')
    await user.type(passwordInput, 'norris')
    await user.click(submitButton)

    // wait for the error message
    const alert = await screen.findByRole('alert')

    expect(alert).toHaveTextContent(/failed to fetch/i)
    expect(window.localStorage.getItem('token')).toBeNull()
  })
})
