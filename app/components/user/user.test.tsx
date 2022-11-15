import { screen } from '@testing-library/react'

import { User } from './user'
import { renderWithRouter } from 'test/test-util'

vi.mock('@remix-run/react', async () => ({
  ...(await vi.importActual('@remix-run/react')),
  useMatches: () => [{ pathname: '/', data: { user: { name: 'Frank' } } }],
}))

test('should render logged user', () => {
  renderWithRouter(<User />)
  expect(screen.getByText('Frank')).toBeDefined()
})
