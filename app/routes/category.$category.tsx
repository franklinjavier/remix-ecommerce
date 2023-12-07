import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'

import { Container } from '~/components/container'
import { Header } from '~/components/header'
import { Pagination } from '~/components/pagination'
import { Showcase } from '~/components/showcase'
import { search } from '~/models/search.server'
import type { Product } from '~/types/product'

import type { LoaderFunctionArgs } from '@remix-run/node'

export async function loader({ request, params }: LoaderFunctionArgs) {
  const { category } = params
  const searchParams = Object.fromEntries(new URL(request.url).searchParams)

  const data = await search('', { filters: `categories: "${category}"`, ...searchParams })

  if (!data?.hits?.length) throw json(null, { status: 404 })

  const products = data.hits as Product[]
  return json({ products })
}

export default function Category() {
  const {products} = useLoaderData<typeof loader>()

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
