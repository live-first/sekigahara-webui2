import newsList from '@/resource/2025/news.json'
import { NewsDetail2025View } from '@/views/2025/news/newsDetail'

export async function generateStaticParams() {
  return newsList.map((news) => ({
    id: news.id.toString(),
  }))
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function NewsDetail(props: { params: any }) {
  const { params } = props
  return <NewsDetail2025View id={params?.id} />
}
