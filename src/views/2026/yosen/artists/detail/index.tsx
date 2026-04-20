import { Img } from '@/components/Image'
import { Panel } from '@/components/Panel'
import { artists } from '@/resource/2026/yosen/artists'
import Link from 'next/link'
import { FaLink } from 'react-icons/fa'

export const YosenArtistsDetailView = (props: { id: string | number }) => {
  const { id } = props

  const detail = artists[artists.findIndex((artist) => artist.x === id)]

  if (!detail) {
    return <div>Artist not found</div>
  }
  return (
    <div className='pb-12'>
      <Img src={detail.img.src} alt={detail.img.alt} />
      <div className='text-sekigahara text-4xl font-bold text-center pt-4'>
        <p className='whitespace-pre-wrap h-full content-center'>{detail.name}</p>
        {detail.yomi && <p className='text-black font-normal text-sm'>（読み：{detail.yomi}）</p>}
      </div>
      <Panel className='my-6 mx-2 md:mx-12 lg:mx-24'>
        <div
          className='whitespace-normal break-all text-black'
          dangerouslySetInnerHTML={{
            __html: `${detail.content}`,
          }}
        />
      </Panel>

      {detail.movie && (
        <div className='flex justify-self-center max-w-4xl'>
          <video src={detail.movie} controls />
        </div>
      )}
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
          <Link
            href={detail.tiktok}
            className='bg-white rounded-full w-20 h-20 p-2 content-center justify-items-center'
          >
            <Img src='https://lime-light.tv/images/TikTok.png' alt='tiktok-logo' cName='w-4/5' />
          </Link>
        )}
        {detail.other && (
          <Link
            href={detail.other}
            className='bg-white rounded-full w-20 h-20 p-2 content-center justify-items-center'
          >
            <FaLink className='text-black w-4/5 h-4/5' />
          </Link>
        )}
      </div>
    </div>
  )
}
