'use client'

import { Container } from '@mui/material'
import { ContentTitle } from '@/components/title/contentTitle.tsx'
import Link from 'next/link'
import { Img } from '@/components/Image/index.tsx'
import { Frame } from '@/components/Frame/index.tsx'
import { NewsList } from '@/templates/newsList'
import { useRouter } from 'next/navigation'
import { useNewsApi } from '@/api/newsApi'
import { NewsContentsType } from '@/domain/news'
import { useEffect, useRef } from 'react'
import { EllipseButton } from '@/components/button/ellipseButton'

export const Home2026View = () => {
  const router = useRouter()
  const { getNews } = useNewsApi()
  const news: NewsContentsType[] = getNews.data
    ? (getNews.data.contents as unknown as NewsContentsType[])
    : []

  const videoRef = useRef<HTMLVideoElement>(null)
  useEffect(() => {
    videoRef.current?.play()
  }, [])

  return (
    <div className='flex flex-col gap-5 pb-10'>
      <div>
        <video
          className='w-full h-full object-cover'
          src='https://sekigahara-idolwars.net/images/2026/Sekigahara2026_Aori.mp4'
          autoPlay
          muted
          loop
          playsInline
        ></video>
      </div>
      <Container maxWidth='md'>
        <div className='flex flex-col gap-8'>
          <div>
            <ContentTitle>お知らせ</ContentTitle>
            <NewsList news={news} max={5} />
            <div className='flex text-center justify-center py-6'>
              <Link href='/news' className='bg-white border border-sekigahara rounded-md p-2'>
                お知らせ一覧
              </Link>
            </div>
          </div>
          {/* <div>
              <ContentTitleView>予戦会情報</ContentTitleView>
              <Frame>
                <img
                  src='https://yosen2025.sekigahara-idolwars.net/picture/yosen-top.jpeg'
                  alt='トップ画像'
                  className='w-full mb-6'
                />
                <div className='text-center'>
                  <Link to='https://yosen2025.sekigahara-idolwars.net' target='_blank'>
                    <EllipseButton className='bg-sekigahara text-white hover:bg-[#fe7e7e] px-4 w-52'>
                      特設サイトへ ▶︎
                    </EllipseButton>
                  </Link>
                </div>
              </Frame>
            </div> */}
          <div>
            <ContentTitle>予戦会エントリー</ContentTitle>
            <Frame>
              <div className='flex justify-center'>
                <EllipseButton
                  className='bg-sekigahara text-white hover:bg-[#fe7e7e] px-4'
                  onClick={() => router.push('/entry')}
                >
                  エントリーフォームへ
                </EllipseButton>
              </div>
            </Frame>
          </div>
          <div>
            <ContentTitle>協力</ContentTitle>
            <Frame>
              <div className='flex justify-center'>
                <Img
                  src='https://sekigahara-idolwars.net/images/2024/cooperation/girlsbomb_logo.jpg'
                  alt='Girls Bomb!!'
                  cName='w-1/3'
                />
              </div>
            </Frame>
          </div>
          <div>
            <ContentTitle>SNS</ContentTitle>
            <div className='flex gap-8 py-8 justify-center'>
              <Link href='https://x.com/_IDOLWARS' className='bg-white rounded-full w-20 h-20 p-4'>
                <Img src='https://sekigahara-idolwars.net/images/x-logo-black.png' alt='x-logo' />
              </Link>
              <Link
                href='https://www.instagram.com/_idolwars'
                className='bg-white rounded-full w-20 h-20 p-2'
              >
                <Img
                  src='https://sekigahara-idolwars.net/images/Instagram-logo-color.png'
                  alt='instagram-logo'
                />
              </Link>
              <Link
                href='https://youtube.com/@sekigaharaidolwarspr7582'
                className='bg-white rounded-full w-20 h-20 p-2 content-center'
              >
                <Img
                  src='https://sekigahara-idolwars.net/images/youtube-logo.png'
                  alt='youtube-logo'
                />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
