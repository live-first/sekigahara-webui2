'use client'

import { HalfMenuLayout } from '@/layouts/HalfMenuLayout'
import { MenuView } from '@/views/2026/yosen/menu'
import { YosenTopView } from '@/views/2026/yosen/top'

export default function Yosen() {
  return <HalfMenuLayout menu={<MenuView />} main={<YosenTopView />} />
}
