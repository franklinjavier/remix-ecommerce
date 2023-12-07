import { ShowcaseItem } from './showcase-item'
import type { Product } from '~/types/product'

type ShowcaseProps = {
  products: Product[]
}

export function Showcase({ products }: ShowcaseProps) {
  return (
    <section className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
      {products.map((product, i: number) => (
        <ShowcaseItem isLazy={i > 4} key={product.objectID} product={product} />
      ))}
    </section>
  )
}
