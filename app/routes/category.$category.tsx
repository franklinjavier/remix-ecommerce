import { data, useLoaderData } from 'react-router'

import { Container } from '~/components/container'
import { Header } from '~/components/header'
import { Pagination } from '~/components/pagination'
import { Showcase } from '~/components/showcase'
import { search } from '~/models/search.server'
import type { Product } from '~/types/product'

import type { LoaderFunctionArgs } from 'react-router'

export async function loader({ request, params }: LoaderFunctionArgs) {
  const { category } = params
  const searchParams = Object.fromEntries(new URL(request.url).searchParams)

  const result = await search('', { filters: `categories: "${category}"`, ...searchParams })

  if (!result?.hits?.length) throw data(null, { status: 404 })

  const products = result.hits as Product[]
  return { products }
}

export default function Category() {
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
