export function NotFound({ children = 'Oops! Nenhum termo encontrado.' }: { children?: React.ReactNode }) {
  return <div className="text-xl">{children}</div>
}
