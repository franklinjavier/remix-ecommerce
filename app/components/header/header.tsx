import { NavLink, useLocation, useSubmit } from '@remix-run/react'
import { useRef } from 'react'

import { Container } from '../container'
import { Filters } from '../filters'
import { Search } from '../search'
import { User } from '../user'

export function Header() {
  const formRef = useRef<HTMLFormElement>(null)
  const submit = useSubmit()
  const location = useLocation()
  const hasFilter = location.pathname === '/'

  const handleChange = () => {
    if (formRef) {
      submit(formRef.current, { replace: true })
    }
  }

  return (
    <div className="flex flex-col" onChange={handleChange}>
      <header className="flex h-60 items-center bg-indigo-800 md:h-40">
        <Container className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <NavLink className="text-6xl font-semibold text-white" prefetch="intent" to="/">
            ⚡️
          </NavLink>
          <Search formRef={formRef} />
          <User />
        </Container>
      </header>
      {hasFilter && <Filters />}
    </div>
  )
}
