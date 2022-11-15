import { Container } from '../container'

export function Filters() {
  return (
    <Container className="mt-5 text-right">
      <select
        className="cursor-default appearance-none bg-none font-sans text-base"
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
