import { installGlobals } from '@remix-run/node'
import '@testing-library/jest-dom/extend-expect'

installGlobals()

vi.mock('@remix-run/react', async () => ({
  ...(await vi.importActual('@remix-run/react')),
  useMatches: () => [{ pathname: '/', data: { user: { name: 'Frank' } } }],
}))
