import { HalfMenuLayout } from '@/layouts/HalfMenuLayout'
import { MenuView } from '@/views/2026/yosen/menu'
import { artists } from '@/resource/2026/yosen/artists'
import { YosenArtistsDetailView } from '@/views/2026/yosen/artists/detail'

export async function generateStaticParams() {
  return artists.map((artist) => ({
    id: artist.x,
  }))
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function YosenArtist(props: { params: any }) {
  const { params } = props
  return <HalfMenuLayout menu={<MenuView />} main={<YosenArtistsDetailView id={params.id} />} />
}
