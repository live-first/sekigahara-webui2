import { BaseViewLayout } from '@/layouts/BaseViewLayout'
import { Footer } from '@/views/2026/footer'
import { Header } from '@/views/2026/header'
import { NewsView } from '@/views/common/news/news'

export default function News() {
  return <BaseViewLayout header={<Header />} main={<NewsView />} footer={<Footer />} />
}
