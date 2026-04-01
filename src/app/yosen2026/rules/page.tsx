'use client'

import { HalfMenuLayout } from '@/layouts/HalfMenuLayout'
import { MenuView } from '@/views/2026/yosen/menu'
import { YosenRulesView } from '@/views/2026/yosen/rules'

export default function YosenRules() {
  return <HalfMenuLayout menu={<MenuView />} main={<YosenRulesView />} />
}
