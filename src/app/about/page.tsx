import { BaseViewLayout } from '@/layouts/BaseViewLayout'
import { Footer } from '@/views/2026/footer'
import { Header } from '@/views/2026/header'
import { CommingSoonView } from '@/views/common/commingSoon/commingSoon'

export default function About() {
  return <BaseViewLayout header={<Header />} main={<CommingSoonView />} footer={<Footer />} />
}
