import { useSearchParams } from '@remix-run/react'

import { Container } from './container'

export function Filters() {
  const [params] = useSearchParams()
  const size = params.get('hitsPerPage') ?? undefined

  return (
    <Container className="mt-5 text-right">
      <select
        className="cursor-default appearance-none bg-none font-sans text-base"
        defaultValue={size}
        form="search-form"
        name="hitsPerPage"
      >
        <option value="16">16 produtos</option>
        <option value="24">24 produtos</option>
        <option value="32">32 produtos</option>
      </select>
    </Container>
  )
}
