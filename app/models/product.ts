import type { SearchResponse } from '@algolia/client-search'

export type Rating = {
  rate: number
  count: number
}

export type HierarchicalCategories = {
  lvl0: string
  lvl1: string
  lvl2: string
}

export type Product = {
  brand: string
  categories: string[]
  description: string
  free_shipping: boolean
  hierarchicalCategories: HierarchicalCategories
  image: string
  name: string
  objectID: string
  popularity: number
  price: number
  prince_range: string
  rating: number
  type: string
  url: string
  _highlightResult?: object
}

export type Hits = SearchResponse['hits']
// export type Hits = {
//   brand: string
//   categories: string[]
//   description: string
//   free_shipping: boolean
//   hierarchicalCategories: HierarchicalCategories
//   image: string
//   name: string
//   objectID: string
//   popularity: number
//   price: number
//   prince_range: string
//   rating: number
//   type: string
//   url: string
//   _highlightResult?: object
//   _snippetResult?: object
//   _rankingInfo?: number
//   _distinctSeqID?: number
// }
