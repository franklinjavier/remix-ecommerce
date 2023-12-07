import { useRouteLoaderData } from '@remix-run/react'

import type { Product } from '~/types/product'

export function useProducts() {
  const { products } = useRouteLoaderData('routes/_index') as { products: Product[] } ?? {}
  return products || []
}
