import { client } from '@/api/microApi'
import { NewsType } from '@/domain/news'
import { BaseViewLayout } from '@/layouts/BaseViewLayout'
import { Footer } from '@/views/2026/footer'
import { Header } from '@/views/2026/header'
import { NewsDetailView } from '@/views/common/news/detail/newsDetail'
import { Suspense } from 'react'

export async function generateStaticParams() {
  const newsList = await client.getList<NewsType>({ endpoint: `news` })

  return newsList.contents.map((news) => ({
    id: news.id.toString(),
  }))
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function NewsDetail(props: { params: any }) {
  const { params } = props
  return (
    <Suspense fallback={<p>読み込み中...</p>}>
      <BaseViewLayout
        header={<Header />}
        main={<NewsDetailView id={params?.id} />}
        footer={<Footer />}
      />
    </Suspense>
  )
}
