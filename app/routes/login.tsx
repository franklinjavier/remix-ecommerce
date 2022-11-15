import { json } from '@remix-run/node'
import { Form, useActionData, useTransition } from '@remix-run/react'

import { Input } from '~/components/input'
import { createUserSession } from '~/utils/session.server'

import type { ActionArgs, MetaFunction } from '@remix-run/node'

type ErrorsProp = {
  password?: string
  email?: string
}

export const meta: MetaFunction = () => {
  return {
    title: 'Login',
    description: 'Faça seu login',
  }
}

export const action = async ({ request }: ActionArgs) => {
  await new Promise((res) => setTimeout(res, 300))

  const data = Object.fromEntries(await request.formData())
  let errors: ErrorsProp = {}

  if (!data.email) {
    errors.email = 'Campo obrigatório'
  }
  if (!data.password) {
    errors.password = 'Campo obrigatório'
  }

  if (Object.keys(errors).length) return json({ errors }, { status: 401 })

  return createUserSession(request, data.email.toString())
}

export default function Login() {
  const actionData = useActionData()
  const transition = useTransition()
  const isLoading = ['loading', 'submitting'].includes(transition.state)

  return (
    <Form
      autoComplete="off"
      className="m-auto flex h-screen max-w-md flex-col content-center justify-center"
      method="post"
    >
      <h1 className="mb-4 text-3xl">Login</h1>
      <fieldset className="flex flex-col gap-2">
        <Input error={actionData?.errors?.email} id="email" label="E-mail" name="email" />
        <Input
          error={actionData?.errors?.password}
          id="password"
          label="Senha"
          name="password"
          type="password"
        />
      </fieldset>
      <button className="btn-primary" disabled={isLoading} type="submit">
        {isLoading ? 'Entrando...' : 'Entrar'}
      </button>
    </Form>
  )
}
