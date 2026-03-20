import newsList from '@/resource/2024/news.json'
import { NewsDetail2024View } from '@/views/2024/news/newsDetail'

export async function generateStaticParams() {
  return newsList.map((news) => ({
    id: news.id.toString(),
  }))
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function NewsDetail(props: { params: any }) {
  const { params } = props
  return <NewsDetail2024View id={params?.id} />
}
