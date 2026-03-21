import { BaseViewLayout } from '@/layouts/BaseViewLayout'
import { Footer } from '@/views/2026/footer'
import { Header } from '@/views/2026/header'
import { Home2026View } from '@/views/2026/home'

export default function Home() {
  return <BaseViewLayout header={<Header />} main={<Home2026View />} footer={<Footer />} />
}
