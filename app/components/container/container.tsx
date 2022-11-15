import type { ReactNode } from 'react'

type ContainerProps = {
  children: ReactNode
  className?: string
}

export function Container({ className, children }: ContainerProps) {
  return <div className={`container mx-auto max-w-7xl px-4 xl:px-0 ${className}`}>{children}</div>
}
