'use client'

import { HalfMenuLayout } from '@/layouts/HalfMenuLayout'
import { MenuView } from '@/views/2026/yosen/menu'
import { YosenRankingView } from '@/views/2026/yosen/ranking'

export default function YosenRanking() {
  return <HalfMenuLayout menu={<MenuView />} main={<YosenRankingView />} />
}
