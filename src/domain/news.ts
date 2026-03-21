type UrlType = {
  title: string
  url: string
}

export type LegacyNewsType = {
  id: number
  date: string
  title: string
  context: string[]
  urls: string[] | UrlType[]
  img: string[]
}

export type NewsType = {
  contents: NewsContentsType[]
  totalCount: number
  offset: number
  limit: number
}

export type NewsContentsType = {
  id: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string
  title: string
  content: string
  openedAt?: string
  open: string
}
