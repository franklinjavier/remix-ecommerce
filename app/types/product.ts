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
