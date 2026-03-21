'use client'

import Link from 'next/link'
import { useNewsApi } from '@/api/newsApi'
import { formatDate } from '@/utils/stringUtils'
import { NotFoundView } from '@/views/common/notfound/notFound'

export const NewsDetailView = (props: { id: string | number }) => {
  const { id } = props

  const { getDetail } = useNewsApi(id as string | undefined)

  const news = getDetail.data

  if (news) {
    return (
      <div className='flex flex-col py-12 px-6'>
        <div className='py-6'>公開日：{formatDate(news.openedAt ?? news.publishedAt, 'YYYY / MM / DD')}</div>
        <div className='text-4xl font-bold border-b-1 pb-4 border-gray-300'>{news.title}</div>
        <div className='flex flex-col py-24'>
          <div
            dangerouslySetInnerHTML={{
              __html: `${news.content}`,
            }}
          />
        </div>
        <div className='py-12'>
          <Link href='/news' className=''>
            ＜ ニュース一覧に戻る
          </Link>
        </div>
      </div>
    )
  } else {
    return <NotFoundView />
  }
}
