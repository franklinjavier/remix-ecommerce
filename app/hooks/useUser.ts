import { useRouteLoaderData } from 'react-router'

import type { loader } from '~/root'

export function useUser() {
  const data = useRouteLoaderData<typeof loader>('root')
  return data?.user
}
