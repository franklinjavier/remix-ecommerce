import { Outlet } from '@remix-run/react'

import { Header } from '~/components/header'

export default function ProductPage() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}
