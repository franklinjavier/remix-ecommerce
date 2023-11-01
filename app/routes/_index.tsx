import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'

import { Container } from '~/components/container'
import { Header } from '~/components/header'
import { Pagination } from '~/components/pagination'
import { Showcase } from '~/components/showcase'
import { search } from '~/models/search.server'

import type { LoaderFunctionArgs } from '@remix-run/node'

export async function loader({ request }: LoaderFunctionArgs) {
  const params = Object.fromEntries(new URL(request.url).searchParams)
  const data = await search(params.query, params)

  if (!data?.hits?.length) return json(null, { status: 404 })

  return json(data)
}

export default function Home() {
  const data = useLoaderData<typeof loader>()

  return (
    <>
      <Header />
      <Container className="my-10">
        <Showcase products={data?.hits || []} />
        <div className="mt-10 flex justify-center">
          <Pagination />
        </div>
      </Container>
    </>
  )
}
