import { Img } from '@/components/Image'
import { artists } from '@/resource/2026/yosen/artists'
import Link from 'next/link'

export const YosenArtistsDetailView = (props: { id: string | number }) => {
  const { id } = props

  const detail = artists[artists.findIndex((artist) => artist.x === id)]

  if (!detail) {
    return <div>Artist not found</div>
  }
  return (
    <div className='py-12'>
      <Img src={detail.img.src} alt={detail.img.alt} />
      <div className='text-sekigahara text-xl font-bold text-center h-15'>
        <p className='whitespace-pre-wrap h-full content-center'>{detail.name}</p>
      </div>
      <div className='text-black'>{detail.content}</div>
      <div>
        <video src={detail.movie} controls />
      </div>
      <div className='flex gap-8 py-8 justify-center'>
        {detail.x && (
          <Link href={`https://x.com/${detail.x}`} className='bg-white rounded-full w-20 h-20 p-4'>
            <Img src='https://lime-light.tv/images/x-logo-black.png' alt='x-logo' />
          </Link>
        )}
        {detail.insta && (
          <Link href={detail.insta} className='bg-white rounded-full w-20 h-20 p-2'>
            <Img src='https://lime-light.tv/images/Instagram-logo-color.png' alt='instagram-logo' />
          </Link>
        )}
        {detail.tiktok && (
          <Link href={detail.tiktok} className='bg-white rounded-full w-20 h-20 p-2 content-center'>
            <Img src='https://lime-light.tv/images/youtube-logo.png' alt='youtube-logo' />
          </Link>
        )}
        {detail.other && (
          <Link href={detail.other} className='bg-white rounded-full w-20 h-20 p-2 content-center'>
            <Img src='https://lime-light.tv/images/youtube-logo.png' alt='youtube-logo' />
          </Link>
        )}
      </div>
    </div>
  )
}
