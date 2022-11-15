import { json } from '@remix-run/node'

export const loader = () => {
  return json({
    status: 'OK',
    uptime: process.uptime(),
    env: process.env.NODE_ENV,
    version: process.version,
    date: new Date(),
  })
}
