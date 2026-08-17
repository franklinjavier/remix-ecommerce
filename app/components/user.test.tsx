import { screen } from '@testing-library/react'

import { renderWithRouter } from 'test/test-util'
import { User } from '~/components/user'

vi.mock('react-router', async () => ({
  ...(await vi.importActual('react-router')),
  useRouteLoaderData: () => ({ user: { name: 'Frank' } }),
}))

test('should render logged user', () => {
  renderWithRouter(<User />)
  expect(screen.getByText('Frank')).toBeDefined()
})
