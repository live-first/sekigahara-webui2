import { BaseViewLayout } from '@/layouts/BaseViewLayout'
import { Entry2026DetailView } from '@/views/2026/entry/detail'
import { Footer } from '@/views/2026/footer'

export default function Entry2026Detail() {
  return <BaseViewLayout main={<Entry2026DetailView />} footer={<Footer />} />
}
