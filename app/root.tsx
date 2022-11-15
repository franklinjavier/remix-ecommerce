import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react'

import tailwind from './tailwind.css'
import { getUser } from './utils/session.server'

import type { LinksFunction, LoaderArgs, MetaFunction } from '@remix-run/node'

export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: tailwind }]
}

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'Remix Ecommerce',
  description: 'Produtos com preço incríveis',
  viewport: 'width=device-width,initial-scale=1',
})

export async function loader({ request }: LoaderArgs) {
  const user = await getUser(request)

  return { user }
}

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

// export function CatchBoundary() {
//   const caught = useCatch()

//   return (
//     <Document>
//       <h1>Caught</h1>
//       <p>Status: {caught.status}</p>
//       <pre>
//         <code>{JSON.stringify(caught.data, null, 2)}</code>
//       </pre>
//     </Document>
//   )
// }

export function ErrorBoundary({ error }: { error: any }) {
  return (
    <Document>
      <h1>Error</h1>
      <p>{error.message}</p>
      <p>The stack trace is:</p>
      <pre>{error.stack}</pre>
    </Document>
  )
}
