import { useEffect, useRef } from 'react'
import { BaseView2025 } from '../layout/index.tsx'
import { Container } from '@mui/material'
import { NewsList } from '../news/newsList.tsx'
import SponsorshipView from '../../2024/home/sponsorship.tsx'
import cooporationData from '../../../resource/2025/cooperation.json'
import sponsorData from '../../../resource/2025/sponsor.json'
import { ContentTitle } from '@/components/title/contentTitle.tsx'
import Link from 'next/link'
import { Img } from '@/components/Image/index.tsx'
import { Frame } from '@/components/Frame/index.tsx'
import { EllipseButton } from '@/components/button/ellipseButton.tsx'

export const Home2025View = () => {
  const videoRef = useRef<HTMLVideoElement>(null)
  useEffect(() => {
    videoRef.current?.play()
  }, [])

  return (
    <BaseView2025>
      <div className='flex flex-col gap-5 pb-10'>
        <div>
          {/* <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            pagination={{ clickable: false, el: '#pagination' }}
            mousewheel={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            speed={500}
            centeredSlides={true}
            loop={true}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 30,
              },
            }}
          >
            {Object.values(imgUrls).map((data, index) => {
              return (
                <SwiperSlide key={index}>
                  <ImgView
                    imgUrl={data}
                    height='500px'
                    backImg='https://sekigahara-idolwars.net/images/2025/topBack.png'
                  />
                </SwiperSlide>
              )
            })}
          </Swiper> */}
          <Img
            src='https://sekigahara-idolwars.net/images/2025/sekigahara_thanks_top.png'
            alt='top'
          />
        </div>
        <Container maxWidth='md'>
          <div className='flex flex-col gap-8'>
            <div>
              <ContentTitle>お知らせ</ContentTitle>
              <NewsList max={5} />
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
            {/* <div>
              <ContentTitleView>予戦会エントリー</ContentTitleView>
              <Frame>
                <div className='text-center'>
                  <EllipseButton
                    className='bg-sekigahara text-white hover:bg-[#fe7e7e] px-4'
                    onClick={() => navigate('/entry')}
                  >
                    エントリーフォームへ
                  </EllipseButton>
                </div>
              </Frame>
            </div> */}
            <div>
              <ContentTitle>関ケ原アプリ</ContentTitle>
              <Frame>
                <div className='flex flex-col gap-6'>
                  <Img
                    src='https://pbs.twimg.com/media/GvAiyJhWwAAAl1Y?format=jpg&name=large'
                    alt='関ケ原アプリ'
                  />
                  <div className='flex self-center w-1/2'>
                    <Link
                      href='https://app.sekigahara-idolwars.net'
                      target='_blank'
                      className='w-full'
                    >
                      <EllipseButton className='bg-sekigahara text-white w-full hover:bg-[#fe7e7e] px-4'>
                        アプリへ
                      </EllipseButton>
                    </Link>
                  </div>
                </div>
              </Frame>
            </div>
            <div>
              <ContentTitle>サテライトイベント</ContentTitle>
              <Frame>
                <div className='flex flex-col gap-6'>
                  <Img
                    src='https://pbs.twimg.com/media/Gu6iXiSWwAAHCGz?format=jpg&name=large'
                    alt='サテライトイベント'
                  />
                  <div className='flex w-full gap-2'>
                    <div className='w-1/3'>
                      <Link
                        href='https://tiget.net/events/412437'
                        target='_blank'
                        className='w-1/3'
                      >
                        <EllipseButton className='bg-[#ff4cc9] text-white w-full hover:bg-[#ff4cc9ac] px-4'>
                          DAY1
                        </EllipseButton>
                      </Link>
                    </div>
                    <div className='w-1/3'>
                      <Link
                        href='https://tiget.net/events/412439'
                        target='_blank'
                        className='w-1/3'
                      >
                        <EllipseButton className='bg-[#4f4cff] text-white w-full hover:bg-[#4f4cffac] px-4'>
                          DAY2
                        </EllipseButton>
                      </Link>
                    </div>
                    <div className='w-1/3'>
                      <Link
                        href='https://tiget.net/events/412444'
                        target='_blank'
                        className='w-1/3'
                      >
                        <EllipseButton className='bg-[#44c42b] text-white w-full hover:bg-[#44c42bac] px-4'>
                          DAY3
                        </EllipseButton>
                      </Link>
                    </div>
                  </div>
                </div>
              </Frame>
            </div>
            <div>
              <ContentTitle>協賛</ContentTitle>
              <Frame>
                <SponsorshipView data={sponsorData} />
              </Frame>
            </div>
            <div>
              <ContentTitle>協力</ContentTitle>
              <Frame>
                <SponsorshipView data={cooporationData} />
              </Frame>
            </div>
            <div className=''>
              <ContentTitle>SNS</ContentTitle>
              <div className='flex gap-8 py-8 justify-center'>
                <Link
                  href='https://x.com/_IDOLWARS'
                  className='bg-white rounded-full w-20 h-20 p-4'
                >
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
    </BaseView2025>
  )
}
