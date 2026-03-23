import { BaseViewLayout } from '@/layouts/BaseViewLayout'
import { Entry2026DetailView } from '@/views/2026/entry/detail'
import { Footer } from '@/views/2026/footer'
import { Header } from '@/views/2026/header'

export default function Entry2026Detail() {
  return <BaseViewLayout header={<Header />} main={<Entry2026DetailView />} footer={<Footer />} />
}
