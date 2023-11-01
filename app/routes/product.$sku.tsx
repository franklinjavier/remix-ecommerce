import { Link, useLoaderData } from '@remix-run/react'

import { Container } from '~/components/container'
import { Rating } from '~/components/rating'
import { getProduct } from '~/models/search.server'

import type { LoaderFunctionArgs } from '@remix-run/node'

export async function loader({ params }: LoaderFunctionArgs) {
  let product
  if (params.sku) {
    product = await getProduct(params.sku)
  }

  return product
}

export default function ProductPage() {
  const product = useLoaderData<typeof loader>()
  if (!product) return null

  return (
    <Container className="bg-white px-6">
      <div className="pt-6">
        <nav aria-label="Breadcrumb" className="pb-8">
          <ol className="flex items-center">
            {product?.categories.map((breadcrumb) => (
              <li className="flex items-center" key={breadcrumb}>
                <Link
                  className="mr-2 text-sm font-medium text-indigo-600 transition-all hover:underline"
                  to={`/category/${breadcrumb}`}
                >
                  {breadcrumb}
                </Link>
                <span className="h-6 w-6 text-gray-300">→</span>
              </li>
            ))}
            <li className="text-sm">{product.name}</li>
          </ol>
        </nav>

        <section className="grid lg:grid-cols-2">
          <div className="m-auto rounded-lg">
            <img
              alt={product.description}
              className="w-full object-scale-down"
              src={product.image}
              width="384"
            />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">{product.name}</h1>

            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <h2 className="sr-only">Product information</h2>
              <p className="mt-4 text-3xl text-gray-900">${product.price}</p>

              <div className="mt-6">
                <h3 className="sr-only">Reviews</h3>
                <div className="flex items-center">
                  <Rating rating={product.rating} />
                </div>
              </div>

              <form className="mt-10">
                <button className="btn-primary" type="submit">
                  COMPRAR
                </button>
              </form>
            </div>

            <p
              className="py-10 text-base text-gray-900 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pb-16 lg:pr-8"
              dangerouslySetInnerHTML={{ __html: product.description }}
            />
          </div>
        </section>
      </div>
    </Container>
  )
}
