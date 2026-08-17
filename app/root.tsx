import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  useRouteError,
} from 'react-router'

import globals from './globals.css?url'
import { getUser } from './utils/session.server'

import type { LinksFunction, LoaderFunctionArgs, MetaFunction } from 'react-router'

export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: globals }]
}

export async function loader({ request }: LoaderFunctionArgs) {
  const user = await getUser(request)

  return { user }
}

export const meta: MetaFunction = () => [
  { title: 'Remix Ecommerce' },
  { name: 'description', content: 'Produtos com preços incríveis' },
]

const Document = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta content="width=device-width,initial-scale=1" name="viewport" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        {/**
         * This removes anything added to html from extensions, causing hydration issue
          https://github.com/remix-run/remix/issues/4822
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `document.querySelectorAll("html > script").forEach((s) => s.parentNode?.removeChild(s));`,
          }}
        />
        <ScrollRestoration />
        <Scripts />
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

export function ErrorBoundary() {
  const error = useRouteError()
  const isRouteError = isRouteErrorResponse(error)
  const unknownError = 'Oops! We have a problem!'

  const status: { [status: number]: string } = {
    401: 'Looks like you tried to visit a page that you do not have access to.',
    404: 'Looks like you tried to visit a page that does not exist.',
    500: unknownError,
  }

  let message = isRouteError
    ? (error.data?.message ?? error.data)
    : error instanceof Error
      ? error.message
      : unknownError

  let title = 'Oops!'

  if (isRouteError) {
    title = error.statusText
    message = status[error.status]
  }

  return (
    <Document>
      <h1>{title}</h1>
      <p>{message}</p>
    </Document>
  )
}
