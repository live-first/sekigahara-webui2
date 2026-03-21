'use client'

import { useNewsApi } from '@/api/newsApi'
import { NewsContentsType } from '@/domain/news'

export const newsPresenter = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { getNews } = useNewsApi()
  const newsList: NewsContentsType[] = getNews.data
    ? (getNews.data.contents as unknown as NewsContentsType[])
    : []

  return {
    newsList,
  }
}
