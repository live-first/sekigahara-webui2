import { HalfMenuLayout } from '@/layouts/HalfMenuLayout'
import { MenuView } from '@/views/2026/yosen/menu'
import { artists } from '@/resource/2026/yosen/artists'
import { YosenArtistsDetailView } from '@/views/2026/yosen/artists/detail'

export async function generateStaticParams() {
  return artists.map((artist) => ({
    id: artist.x,
  }))
}

export default async function YosenArtist(props: { params: Promise<{ id: string }> }) {
  const params = await props.params
  return <HalfMenuLayout menu={<MenuView />} main={<YosenArtistsDetailView id={params.id} />} />
}
