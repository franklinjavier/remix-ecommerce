import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'

import { Container } from '~/components/container'
import { Header } from '~/components/header'
import { Pagination } from '~/components/pagination'
import { Showcase } from '~/components/showcase'
import { getCategory } from '~/models/search.server'

import type { LoaderArgs } from '@remix-run/node'

export async function loader({ request }: LoaderArgs) {
  const { category } = Object.fromEntries(new URL(request.url).searchParams)
  const data = await getCategory(category)

  return json(data)
}

export default function Home() {
  const data = useLoaderData<typeof loader>()

  return (
    <>
      <Header />
      <Container className="my-10">
        <Showcase products={data.hits} />
        <Pagination />
      </Container>
    </>
  )
}
