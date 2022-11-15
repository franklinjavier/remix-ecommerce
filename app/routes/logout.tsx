import { logout } from '~/utils/session.server'

import type { LoaderArgs } from '@remix-run/node'

export const loader = async ({ request }: LoaderArgs) => {
  return await logout(request)
}
