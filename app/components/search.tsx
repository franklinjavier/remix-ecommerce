import { Form, useSearchParams, useSubmit } from '@remix-run/react'

export function Search() {
  const [params] = useSearchParams()
  const query = params.get('query') || ''
  const submit = useSubmit()
  const handleChange: React.ComponentProps<typeof Form>['onChange'] = (e) => {
    const form = e.currentTarget?.closest('form')
    if (form) {
      submit(form, { replace: true })
    }
  }

  return (
    <Form action="/" className="w-full max-w-4xl" id="search-form" onChange={handleChange}>
      <input
        autoComplete="off"
        className="border-radius h-14 w-full rounded-lg border-none px-5 py-2 text-xl text-gray-700 shadow-md outline-none focus:ring-4 focus:ring-indigo-600 md:h-16 md:text-3xl"
        defaultValue={query}
        id="query"
        name="query"
        placeholder="O que deseja hoje?"
      />
    </Form>
  )
}
