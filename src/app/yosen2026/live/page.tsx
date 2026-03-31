'use client'

import { HalfMenuLayout } from '@/layouts/HalfMenuLayout'
import { MenuView } from '@/views/2026/yosen/menu'

export default function YosenLive() {
  return <HalfMenuLayout menu={<MenuView />} />
}
