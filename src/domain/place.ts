import { CommonType } from './meta'

export type PlaceType = {
  name: string
  address: string
  map: string
  url: string
  x_url?: string
} & CommonType
