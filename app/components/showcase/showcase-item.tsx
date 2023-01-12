import { NavLink } from '@remix-run/react'

import { Rating } from '../rating'
import type { Product } from '~/models/product'

type ShowcaseItemProps = {
  product: Product
  isLazy?: boolean
}

export function ShowcaseItem({ product, isLazy }: ShowcaseItemProps) {
  return (
    <NavLink
      className="relative block cursor-pointer rounded-xl border border-gray-200 p-8 transition-all hover:border-gray-400"
      prefetch="intent"
      to={`/product/${product.objectID}`}
    >
      <picture>
        <img
          alt={product.description}
          className="h-48 w-96 object-scale-down"
          height="130"
          loading={isLazy ? 'lazy' : undefined}
          src={product.image}
          width="200"
        />
      </picture>
      <div className="flex flex-col gap-3">
        <h3 className="mt-6 text-lg text-gray-600 line-clamp-2">{product.name}</h3>
        <p>${product.price}</p>
        <Rating rating={product.rating} />
      </div>
    </NavLink>
  )
}
