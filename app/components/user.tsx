import { NavLink } from '@remix-run/react'

import { useUser } from '~/hooks/useUser'

export function User() {
  const user = useUser()

  return user ? (
    <div className="flex gap-2 text-white">
      Olá, <NavLink to="/account">{user.name}</NavLink>&bull;
      <NavLink rel="nofollow" to="/logout">
        Sair
      </NavLink>
    </div>
  ) : (
    <NavLink className="text-white" prefetch="intent" to="/login">
      Login
    </NavLink>
  )
}
