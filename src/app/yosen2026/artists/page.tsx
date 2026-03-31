'use client'

import { HalfMenuLayout } from '@/layouts/HalfMenuLayout'
import { MenuView } from '@/views/2026/yosen/menu'

export default function YosenArtists() {
  return <HalfMenuLayout menu={<MenuView />} />
}
