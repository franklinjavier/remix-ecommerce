import { logout } from '~/utils/session.server'

import type { LoaderFunctionArgs } from '@remix-run/node'

export const loader = async ({ request }: LoaderFunctionArgs) => {
  return await logout(request)
}
