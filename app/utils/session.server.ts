import { createCookieSessionStorage, redirect } from '@remix-run/node'

export const sessionStorage = createCookieSessionStorage({
  cookie: {
    httpOnly: true, // for security reasons, make this cookie http only
    name: '__session',
    path: '/', // remember to add this so the cookie will work in all routes
    sameSite: 'lax', // this helps with CSRF
    secrets: ['ImSoS3cr3t'], // Move to env process.env.SESSION_SECRET as string
    secure: process.env.NODE_ENV === 'production', // enable this in prod only
  },
})

export async function getSession(request: Request) {
  return sessionStorage.getSession(request.headers.get('Cookie'))
}

export async function logout(request: Request) {
  const session = await getSession(request)
  throw redirect('/login', { headers: { 'Set-Cookie': await sessionStorage.destroySession(session) } })
}

const ONE_WEEK = 60 * 60 * 24 * 7

export async function createUserSession(request: Request, email: string) {
  const session = await getSession(request)
  session.set('currentUser', { email, name: email.split('@')[0] })
  const cookie = await sessionStorage.commitSession(session, { maxAge: ONE_WEEK })

  return redirect('/', {
    headers: {
      'Set-Cookie': cookie,
    },
  })
}

export async function getUser(request: Request) {
  const session = await getSession(request)
  return session.get('currentUser')
}

export async function ensureAuthenticated(request: Request) {
  const user = await getUser(request)
  if (!user) return logout(request)
  return user
}
