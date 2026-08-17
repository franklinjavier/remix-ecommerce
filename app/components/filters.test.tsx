import { screen } from '@testing-library/react'

import { Filters } from './filters'
import { renderWithRouter } from 'test/test-util'

vi.mock('react-router', async () => ({
  ...(await vi.importActual('react-router')),
  useSearchParams: () => [
    {
      get: () => '24',
    },
  ],
}))

test('should correctly set value based querystring 24', () => {
  renderWithRouter(<Filters />)
  expect((screen.getByRole('combobox') as HTMLOptionElement).value).toBe('24')
})
