import { NavLink, Outlet } from '@remix-run/react'

import { Container } from '~/components/container'
import { Header } from '~/components/header'
import { ensureAuthenticated } from '~/utils/session.server'

import type { LoaderArgs } from '@remix-run/node'

export async function loader({ request }: LoaderArgs) {
  await ensureAuthenticated(request)
  return null
}

const accountLinks = [
  { to: '', text: 'Perfil' },
  { to: 'address', text: 'Endereços' },
  { to: 'cards', text: 'Cartões' },
  { to: 'orders', text: 'Pedidos' },
]

export default function Account() {
  return (
    <>
      <Header />
      <Container className="mt-8">
        <div className="flex">
          <div className="flex w-44 flex-col gap-2">
            {accountLinks.map((link) => (
              <NavLink
                className={({ isActive }) =>
                  `${isActive ? 'font-bold text-indigo-600' : ''} hover:font-bold hover:text-indigo-600`
                }
                key={link.to}
                to={link.to}
              >
                {link.text}
              </NavLink>
            ))}
          </div>
          <Outlet />
        </div>
      </Container>
    </>
  )
}
