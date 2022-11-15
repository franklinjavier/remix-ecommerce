import { screen } from '@testing-library/react'

import { Filters } from './filters'
import { renderWithRouter } from 'test/test-util'

test('should correctly set value based querystring 24', () => {
  vi.mock('@remix-run/react', async () => ({
    ...(await vi.importActual('@remix-run/react')),
    useSearchParams: () => [
      {
        get: () => '24',
      },
    ],
  }))

  renderWithRouter(<Filters />)
  expect((screen.getByRole('combobox') as HTMLOptionElement).value).toBe('24')
})
