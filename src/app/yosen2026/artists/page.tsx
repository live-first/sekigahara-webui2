'use client'

import { HalfMenuLayout } from '@/layouts/HalfMenuLayout'
import { YosenArtistsView } from '@/views/2026/yosen/artists'
import { MenuView } from '@/views/2026/yosen/menu'

export default function YosenArtists() {
  return <HalfMenuLayout menu={<MenuView />} main={<YosenArtistsView />} />
}
