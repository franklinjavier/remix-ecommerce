export const loader = () => {
  return Response.json({
    status: 'OK',
    uptime: process.uptime(),
    env: process.env.NODE_ENV,
    version: process.version,
    date: new Date(),
  })
}
