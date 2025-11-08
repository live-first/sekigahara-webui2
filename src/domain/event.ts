import { CategoryType } from './category'
import { ImgUrlType } from './img'
import { CommonType, MetaType } from './meta'
import { PlaceType } from './place'

export type EventsType = {
  contents: EventContentsType[]
} & MetaType

export type EventContentsType = {
  title: string
  categories: CategoryType
  date: string
  open?: string
  start?: string
  place: PlaceType[]
  context: string
  ticket?: string
  img: ImgUrlType[]
  publish?: string
} & CommonType
