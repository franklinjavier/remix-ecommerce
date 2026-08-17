import { NavLink, useSearchParams } from 'react-router'

export function Pagination() {
  const [params] = useSearchParams()
  const query = Object.fromEntries(params.entries())
  const currentPage = Number(query.page || 0)

  const goTo = (direction: string) => {
    query.page = String(direction === 'prev' ? currentPage - 1 : currentPage + 1)
    return `?${new URLSearchParams(query)}`
  }

  return (
    <div className="flex gap-2">
      {!!currentPage && (
        <NavLink className="btn-primary" prefetch="intent" to={goTo('prev')}>
          Anterior
        </NavLink>
      )}
      <NavLink className="btn-primary" prefetch="intent" to={goTo('next')}>
        Próxima
      </NavLink>
    </div>
  )
}
