import { ShowcaseItem } from './showcase-item'
import type { Hits } from '~/models/product'

type ShowcaseProps = {
  products: Hits
}

const Notfound = () => <div className="text-xl">Oops! Nenhum termo encontrado</div>

export function Showcase({ products }: ShowcaseProps) {
  if (!products.length) return <Notfound />

  return (
    <section className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
      {products.map((product) => (
        <ShowcaseItem key={product.objectID} product={product} />
      ))}
    </section>
  )
}
