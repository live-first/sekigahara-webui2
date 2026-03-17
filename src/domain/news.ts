import { ImgProps } from '@/components/Image'

type UrlType = {
  title: string
  url: string
}

export type NewsType = {
  id: number
  date: string
  title: string
  context: string[]
  urls: UrlType[]
  img: ImgProps[]
}
