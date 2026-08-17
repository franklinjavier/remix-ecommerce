import { ensureAuthenticated } from '~/utils/session.server'

import type { LoaderFunctionArgs } from 'react-router'

export async function loader({ request }: LoaderFunctionArgs) {
  return await ensureAuthenticated(request)
}
export default function AddressPage() {
  return (
    <section className="flex flex-col gap-4">
      <h1 className="text-2xl">Meus endereços</h1>
    </section>
  )
}
