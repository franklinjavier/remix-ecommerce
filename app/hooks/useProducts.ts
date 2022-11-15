import { useMatches } from '@remix-run/react'

export function useProducts() {
  return useMatches().find((m: any) => m?.id === 'routes/index')?.data?.hits || []
}
