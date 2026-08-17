import { data, useLoaderData } from 'react-router'

import { Container } from '~/components/container'
import { Header } from '~/components/header'
import { NotFound } from '~/components/not-found'
import { Pagination } from '~/components/pagination'
import { Showcase } from '~/components/showcase'
import { search } from '~/models/search.server'
import type { Product } from '~/types/product'

import type { LoaderFunctionArgs } from 'react-router'

export async function loader({ request }: LoaderFunctionArgs) {
  const searchParams = Object.fromEntries(new URL(request.url).searchParams)
  const result = await search(searchParams.query, searchParams)

  if (!result?.hits?.length) throw data(null, { status: 404 })

  const products = result.hits as Product[]
  return { products }
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
