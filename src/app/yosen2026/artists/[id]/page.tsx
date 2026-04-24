import { HalfMenuLayout } from '@/layouts/HalfMenuLayout'
import { artists } from '@/resource/2026/yosen/artists'
import { YosenArtistsDetailView } from '@/views/2026/yosen/artists/detail'

export async function generateStaticParams() {
  return artists.map((artist) => ({
    id: artist.x,
  }))
}

export default async function YosenArtist(props: { params: Promise<{ id: string }> }) {
  const params = await props.params
  return <HalfMenuLayout main={<YosenArtistsDetailView id={params.id} />} />
}
