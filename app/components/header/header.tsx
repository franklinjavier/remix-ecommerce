import { NavLink, useLocation } from '@remix-run/react'

import { Container } from '../container'
import { Filters } from '../filters'
import { Search } from '../search'
import { User } from '../user'
import { useProducts } from '~/hooks/useProducts'

export function Header() {
  const location = useLocation()
  const products = useProducts()
  const hasFilter = !!products.length && location.pathname === '/'

  return (
    <div className="flex flex-col">
      <header className="flex h-60 items-center bg-indigo-800 md:h-40">
        <Container className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <NavLink className="text-6xl font-semibold text-white" to="/">
            ⚡️
          </NavLink>
          <Search />
          <User />
        </Container>
      </header>
      {hasFilter && <Filters />}
    </div>
  )
}
