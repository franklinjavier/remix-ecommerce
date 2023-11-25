import { ensureAuthenticated } from '~/utils/session.server'

import type { LoaderFunctionArgs } from '@remix-run/node'


export async function loader({ request }: LoaderFunctionArgs) {
  return await ensureAuthenticated(request)
}
export default function OrdersPage() {
  return (
    <section className="flex flex-col gap-4">
      <h1 className="text-2xl">Histórico de pedidos</h1>
    </section>
  )
}
