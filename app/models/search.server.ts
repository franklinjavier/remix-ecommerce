import algoliasearch from 'algoliasearch'

import type { Product } from './product'
import type { AlgoliaSearchOptions } from 'algoliasearch'

const client = algoliasearch('latency', '6be0576ff61c053d5f9a3225e2a90f76')
const algolia = client.initIndex('instant_search')

export async function search(query: string, options: AlgoliaSearchOptions) {
  return await algolia.search(query, options)
}
export async function getProduct(sku: string) {
  const product: Product = await algolia.getObject(sku)
  return product
}

export async function getCategory(filter: string) {
  return await algolia.searchForFacetValues('category', filter)
}
