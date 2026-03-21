'use client'

import { NewsList } from '@/templates/newsList'
import { useNewsApi } from '@/api/newsApi'
import { NewsContentsType } from '@/domain/news'
import { Title } from '@/components/title/title'
import { Container } from '@mui/material'

export const NewsView = () => {
  const { getNews } = useNewsApi()
  const newsList: NewsContentsType[] = getNews.data
    ? (getNews.data.contents as unknown as NewsContentsType[])
    : []
  return (
    <Container maxWidth='md'>
      <div className='flex flex-col gap-6'>
        <Title english='NEWS' japaniese='お知らせ' />
        <NewsList news={newsList} max={10} isPagination />
      </div>
    </Container>
  )
}
