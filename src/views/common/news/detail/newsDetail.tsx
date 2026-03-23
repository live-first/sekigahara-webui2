'use client'

import Link from 'next/link'
import { useNewsApi } from '@/api/newsApi'
import { formatDate } from '@/utils/stringUtils'
import { NotFoundView } from '@/views/common/notfound/notFound'
import './newsDetail.css'
import { Container } from '@mui/material'

export const NewsDetailView = (props: { id: string | number }) => {
  const { id } = props

  const { getDetail } = useNewsApi(id as string | undefined)

  const news = getDetail.data

  if (news) {
    return (
      <div className='news-detail py-12'>
        <Container maxWidth='md' className='bg-white py-12 rounded-lg'>
          <div className='text-sm'>
            公開日：{formatDate(news.openedAt ?? news.publishedAt, 'YYYY / MM / DD')}
          </div>
          <div className='font-medium text-2xl border-b-2 border-sekigahara py-4'>{news.title}</div>
          <div className='py-6 whitespace-normal'>
            <div
              className='whitespace-normal break-all'
              dangerouslySetInnerHTML={{
                __html: `${news.content}`,
              }}
            />
          </div>
          <div className='py-12'>
            <Link href='/news' className='hover:text-sekigahara'>
              ＜ ニュース一覧に戻る
            </Link>
          </div>
        </Container>
      </div>
    )
  } else {
    return <NotFoundView />
  }
}
