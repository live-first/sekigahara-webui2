import { imgInit, ImgType } from './img'

export type RankingType = {
  date: string
  time: string
  ranking: RankingUnit[]
}

export const rankingInit: RankingType = {
  date: '',
  time: '',
  ranking: [],
}

export type RankingUnit = UnitType & {
  point: number
  live?: number
  meta?: number
}

export type UnitType = {
  name: string
  img: ImgType
  x?: string
}

export const UnitInit: UnitType = {
  name: '',
  img: imgInit,
  x: '',
}
