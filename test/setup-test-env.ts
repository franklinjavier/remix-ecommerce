import { installGlobals } from '@remix-run/node'

installGlobals()

vi.mock('@remix-run/react', async () => ({
  ...(await vi.importActual('@remix-run/react')),
  useMatches: () => [{ pathname: '/', data: { user: { name: 'Frank' } } }],
}))
