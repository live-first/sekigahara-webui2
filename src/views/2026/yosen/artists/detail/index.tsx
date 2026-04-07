import { Img } from '@/components/Image'
import { artists } from '@/resource/2026/yosen/artists'

export const YosenArtistsDetailView = (props: { id: string | number }) => {
  const { id } = props

  const detail = artists[artists.findIndex((artist) => artist.x === id)]

  if (!detail) {
    return <div>Artist not found</div>
  }
  return (
    <div className=''>
      {detail.name}
      <Img
        src={detail.img.src}
        alt={detail.img.alt}
        cName='w-full h-full absolute top-0 left-0 object-contain'
      />
    </div>
  )
}
