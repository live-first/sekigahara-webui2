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
    <div className='pb-24'>
      <Img src={detail.img.src} alt={detail.img.alt} />
      <div className='text-sekigahara text-4xl font-bold text-center pt-4'>
        <p className='whitespace-pre-wrap h-full content-center'>{detail.name}</p>
        {detail.yomi && <p className='text-black font-normal text-sm'>（読み：{detail.yomi}）</p>}
      </div>
      <Panel className='my-12 md:mx-12 max-w-4xl w-full justify-self-center'>
        <div
          className='whitespace-normal break-all text-black w-full'
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
      <div className='flex gap-8 py-18 justify-center'>
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
        {detail.youtube && (
          <Link
            href={detail.youtube}
            className='bg-white rounded-full w-20 h-20 p-2 content-center justify-items-center'
          >
            <Img
              src='https://lime-light.tv/images/youtube-logo.png'
              alt='youtube-logo'
              cName='w-4/5'
            />
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
      <div className='flex justify-center justify-self-center max-w-4xl w-full'>
        {detail.withColle && (
          <Link href={`https://www.withlive.jp/cast_item.php?id=${detail.withColle}`} className='w-4/5'>
            <div className='flex bg-white border-2 border-blue-900 rounded-3xl text-blue-900 py-6 text-xl md:text-4xl w-full gap-4 items-center justify-center hover:bg-blue-900 hover:text-white'>
              <Img
                src='https://lime-light.tv/images/with_collection_icon.png'
                alt='Withコレ'
                cName='rounded-full w-16 h-16 md:w-24 md:h-24'
                notNext
              />
              Withコレ　→
            </div>
          </Link>
        )}
      </div>
      <Link href='/artists' className='flex justify-center text-sekigahara text-lg font-bold mt-24'>
        ← 出演者一覧へ
      </Link>
    </div>
  )
}
