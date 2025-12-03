import React from 'react'
import { Container } from '@mui/material'
import './about.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { OutlineView } from '../outline/outline.tsx'
import imgUrls from '../../../resource/aboutImages.json'
import { Img } from '@/components/Image/index.tsx'
import { Title } from '@/components/title/title.tsx'
import { YouTube } from '@/components/YouTube/index.tsx'
import { BaseViewLayout } from '@/layouts/BaseViewLayout.tsx'

interface Data {
  data: Array<string>
}

const Slider = (props: Data) => {
  const { data } = props

  return (
    <div className='swiper-container'>
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        pagination={{ clickable: false, el: '#pagination' }}
        mousewheel={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        speed={500}
        centeredSlides={true}
        loop={true}
        breakpoints={{
          0: {
            slidesPerView: 2.2,
          },
          992: {
            slidesPerView: 2.8,
          },
          1800: {
            slidesPerView: 5.3,
          },
        }}
      >
        {Object.values(data).map((data, index) => {
          return (
            <SwiperSlide key={index}>
              <div className='img-area'>
                <Img cName='event-card-img' src={data} alt='' />
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

const MainView = () => {
  return (
    <div className='about'>
      <Container maxWidth='md'>
        <Title english='ABOUT' japaniese='イベント概要' />
        <div className='about-view'>
          <Img
            src='https://sekigahara-idolwars.net/images/2024/logo/concept-back.png'
            alt='concept-view'
          />
          <div className='concept'>
            <div className='concept-font'>十回目の夏に</div>
            <div className='concept-font'>この景色を目の当たりにする</div>
            <div className='concept-font'>唄姫は、私たちだ。</div>
          </div>
        </div>
        <Slider data={imgUrls} />

        <YouTube
          videoId='csDUXCgKOcw?si=YcziHtwFrezxI9y-'
          title='SEKIGAHARA IDOL WARS2023 Special Thank You Movie'
        />
        <YouTube
          videoId='44a49WFCq3I?si=RvXMa4Gl8Vv2x5-z'
          title='SEKIGAHARA IDOL WARS2022 Special Thank You Movie'
        />
        <OutlineView
          logo='https://sekigahara-idolwars.net/images/2024/logo.svg'
          title='SEKIGAHARA IDOL WARS 2024 - 関ケ原唄姫合戦- 10thAnniversary '
          date='2024年7月19日(金)、20日(土)、21日(日)'
        />
      </Container>
    </div>
  )
}

export const About2024View = () => {
  return <BaseViewLayout main={<MainView />} />
}
