import { BaseViewLayout } from '@/layouts/BaseViewLayout'
import { Entry2026View } from '@/views/2026/entry'
import { Footer } from '@/views/2026/footer'
import { Header } from '@/views/2026/header'

export default function Entry() {
  return <BaseViewLayout header={<Header />} main={<Entry2026View />} footer={<Footer />} />
}
