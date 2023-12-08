import { screen } from '@testing-library/react'

import { renderWithRouter } from 'test/test-util'
import { User } from '~/components/user'

vi.mock('@remix-run/react', async () => ({
  ...(await vi.importActual('@remix-run/react')),
  useRouteLoaderData: () => ({ user: { name: 'Frank' } }),
}))

test('should render logged user', () => {
  renderWithRouter(<User />)
  expect(screen.getByText('Frank')).toBeDefined()
})
