import { useMatches } from '@remix-run/react'

export function useUser() {
  return useMatches().find((m: any) => m?.pathname === '/')?.data?.user
}
