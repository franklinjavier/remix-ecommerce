import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BrowserRouter } from 'react-router-dom'

import type { RenderOptions } from '@testing-library/react'
import type { ReactElement } from 'react'

export const renderWithRouter = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) => {
  const user = userEvent.setup()
  return {
    user,
    ...render(ui, { wrapper: BrowserRouter, ...options }),
  }
}
export * from '@testing-library/react'
