import { Form, useSearchParams } from '@remix-run/react'

type SearchProps = {
  formRef: React.RefObject<HTMLFormElement>
}

export function Search({ formRef }: SearchProps) {
  const [params] = useSearchParams()
  const query = params.get('query') || ''

  return (
    <Form action="/" className="w-full max-w-4xl" id="search-form" ref={formRef}>
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
