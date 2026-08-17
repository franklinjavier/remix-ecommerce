import { algoliasearch } from 'algoliasearch'

import type { Product } from '~/types/product'

import type { SearchParamsObject } from 'algoliasearch'

const client = algoliasearch('latency', '6be0576ff61c053d5f9a3225e2a90f76')
const indexName = 'instant_search'

type SearchOptions = {
  page?: string | number
  hitsPerPage?: string | number
  filters?: string
  query?: string
}

export async function search(query = '', options: SearchOptions = {}) {
  const searchParams: SearchParamsObject = {
    query,
    filters: options.filters,
    page: options.page !== undefined ? Number(options.page) : undefined,
    hitsPerPage: options.hitsPerPage !== undefined ? Number(options.hitsPerPage) : undefined,
  }

  return await client.searchSingleIndex<Product>({ indexName, searchParams })
}

export async function getProduct(sku: string) {
  const product = await client.getObject({ indexName, objectID: sku })
  return product as unknown as Product
}

export async function getCategory(filter: string) {
  return await client.searchForFacetValues({
    indexName,
    facetName: 'category',
    searchForFacetValuesRequest: { facetQuery: filter },
  })
}
