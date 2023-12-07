import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'

import { Container } from '~/components/container'
import { Header } from '~/components/header'
import { NotFound } from '~/components/not-found'
import { Pagination } from '~/components/pagination'
import { Showcase } from '~/components/showcase'
import { search } from '~/models/search.server'
import type { Product } from '~/types/product'

import type { LoaderFunctionArgs } from '@remix-run/node'

export async function loader({ request }: LoaderFunctionArgs) {
  const searchParams = Object.fromEntries(new URL(request.url).searchParams)
  const data = await search(searchParams.query, searchParams)

  if (!data?.hits?.length) throw json(null, { status: 404 })

  const products = data.hits as Product[]
  return json({ products })
}

export default function Home() {
  const { products } = useLoaderData<typeof loader>()

  return (
    <>
      <Header />
      <Container className="my-10">
        <Showcase products={products} />
        <div className="mt-10 flex justify-center">
          <Pagination />
        </div>
      </Container>
    </>
  )
}

export function ErrorBoundary() {
  return (
    <>
      <Header />
      <Container className="my-10">
        <NotFound />
      </Container>
    </>
  )
}
