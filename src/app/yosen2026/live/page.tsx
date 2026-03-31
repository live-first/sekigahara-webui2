'use client'

import { HalfMenuLayout } from '@/layouts/HalfMenuLayout'
import { YosenLiveView } from '@/views/2026/yosen/live'
import { MenuView } from '@/views/2026/yosen/menu'

export default function YosenLive() {
  return <HalfMenuLayout menu={<MenuView />} main={<YosenLiveView />} />
}
