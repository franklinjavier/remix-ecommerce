import { useUser } from '~/hooks/useUser'

export default function Profile() {
  const user = useUser()
  if (!user) return null

  return (
    <section className="flex flex-col gap-4">
      <h1 className="text-2xl">Perfil</h1>
      <div className="flex gap-4">
        <p>Nome: {user.name}</p>
        <p>E-mail: {user.email}</p>
      </div>
    </section>
  )
}
