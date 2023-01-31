import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react'

import tailwind from './tailwind.css'
import { getUser } from './utils/session.server'

import type { LinksFunction, LoaderArgs, MetaFunction } from '@remix-run/node'

export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: tailwind }]
}

export async function loader({ request }: LoaderArgs) {
  const user = await getUser(request)

  return { user }
}

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'Remix Ecommerce',
  description: 'Produtos com preços incríveis',
  viewport: 'width=device-width,initial-scale=1',
})

const Document = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}

export default function App() {
  return (
    <Document>
      <Outlet />
    </Document>
  )
}

export function ErrorBoundary({ error }: { error: Error }) {
  return (
    <Document>
      <h1>Error</h1>
      <p>{error.message}</p>
      <p>The stack trace is:</p>
      <pre>{error.stack}</pre>
    </Document>
  )
}
