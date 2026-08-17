import { logout } from '~/utils/session.server'

import type { LoaderFunctionArgs } from 'react-router'

export const loader = async ({ request }: LoaderFunctionArgs) => {
  return await logout(request)
}
