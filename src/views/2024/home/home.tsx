import React, { useEffect, useRef, useState } from 'react'
import { Container } from '@mui/material'
import './home.scss'
import NewsList from '../news/newsList.tsx'
import SponsorshipView from './sponsorship.tsx'
import cooperationData from '../../../resource/cooperation.json'
import sponsorData from '../../../resource/sponsor.json'
import Modal from 'react-modal'
// import { Swiper, SwiperSlide } from 'swiper/react'
// import { Autoplay, Navigation, Pagination } from 'swiper/modules'
// import imgUrls from '../resource/homeSlide.json'
// import ImgView from '../component/view/imgView.tsx'
import { IoTicketSharp } from 'react-icons/io5'
// import data from '../resource/artists.json'
// import ArtistBoxView, { ArtistData } from '../component/view/artistBoxView.tsx'
import { IoTicket } from 'react-icons/io5'
import { GiMicrophone } from 'react-icons/gi'
import { FaClock } from 'react-icons/fa6'
import { GoAlertFill } from 'react-icons/go'
import { IoMdPin } from 'react-icons/io'
import { FaMapLocationDot } from 'react-icons/fa6'
import { Img } from '@/components/Image/index.tsx'
import { ContentTitle } from '@/components/title/contentTitle.tsx'
import Link from 'next/link'
import { Frame } from '@/components/Frame/index.tsx'
import CircleButton from '@/components/button/circleButton.tsx'
import { SquareView } from '@/templates/squareView.tsx'
import { BaseViewLayout } from '@/layouts/BaseViewLayout.tsx'

const Home = () => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [introShow, isIntroShow] = useState(false)
  const [introLogoShow, isIntroLogoShow] = useState(false)
  const [anivLogoShow, isAnivLogoShow] = useState(false)

  useEffect(() => {
    if (!localStorage.getItem('isIntroShowed')) {
      isIntroShow(true)
      localStorage.setItem('isIntroShowed', 'true')
      isIntroLogoShow(true)
      setTimeout(() => {
        isIntroLogoShow(false)
        isAnivLogoShow(true)
      }, 3000)
      setTimeout(() => {
        isIntroShow(false)
      }, 6000)
    }
    videoRef.current?.play()
  }, [])

  return (
    <div className='home'>
      <div className='top-view'>
        {/* <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          pagination={{ clickable: false, el: '#pagination' }}
          mousewheel={true}
          autoplay={{delay: 5000, disableOnInteraction: false}}
          speed={500}
          centeredSlides={true}
          loop={true}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 30
            },
          }}
        >
          {Object.values(imgUrls).map((data, index) => {
            return (
              <SwiperSlide key={index}>
                <ImgView imgUrl={data} height='500px' backImg='https://sekigahara-idolwars.net/images/2024/home/home-back.png'/>
              </SwiperSlide>
            )
          })}
        </Swiper> */}
        <Img src='https://sekigahara-idolwars.net/images/2024/home/last.png' alt='Thanks' />
        <div className='home-outline'>
          <Img
            cName='day-svg'
            src='https://sekigahara-idolwars.net/images/2024/home/day.png'
            alt=''
          />
        </div>
      </div>
      <Container maxWidth='md'>
        <div className='home-news'>
          <ContentTitle>お知らせ</ContentTitle>
          <NewsList max={3} />
          <div className='news-link'>
            <Link href='/2024/news'>お知らせ一覧</Link>
          </div>
        </div>
        <div className='home-about'>
          <ContentTitle>関ケ原唄姫合戦とは</ContentTitle>
          <Link href='/2024/about'>
            <div className='about-box'>
              <Img
                src='https://sekigahara-idolwars.net/images/2024/logo/concept-back.png'
                alt='concept-view'
              />
              <div className='logo'>
                <Img
                  src='https://sekigahara-idolwars.net/images/2024/logo/logo_white.png'
                  alt='logo'
                />
              </div>
            </div>
          </Link>
        </div>
      </Container>
      <div className='content-list'>
        <Container maxWidth='md'>
          <div className='grid grid-cols-2 sm:grid-cols-3 gap-2 md:gap-6'>
            <SquareView
              page='/2024/ticket'
              imgUrl='https://sekigahara-idolwars.net/images/2024/home/back1.jpg'
              alt=''
            >
              <div className='list-item'>
                <span className='svg item-ticket'>
                  <IoTicket />
                </span>
                TICKET
              </div>
            </SquareView>
            <SquareView
              page='/2024/lineup'
              imgUrl='https://sekigahara-idolwars.net/images/2024/home/back2.jpg'
              alt=''
            >
              <div className='list-item'>
                <span className='svg item-lineup'>
                  <GiMicrophone />
                </span>
                LINEUP
              </div>
            </SquareView>
            <SquareView
              page='/2024/live'
              imgUrl='https://sekigahara-idolwars.net/images/2024/home/back3.jpg'
              alt=''
            >
              <div className='list-item'>
                <span className='svg item-timetable'>
                  <FaClock />
                </span>
                TIMETABLE
              </div>
            </SquareView>
            <SquareView
              page='/2024/notice'
              imgUrl='https://sekigahara-idolwars.net/images/2024/home/back4.jpg'
              alt=''
            >
              <div className='list-item'>
                <span className='svg item-notice'>
                  <GoAlertFill />
                </span>
                NOTICE
              </div>
            </SquareView>
            <SquareView
              page='/2024/map'
              imgUrl='https://sekigahara-idolwars.net/images/2024/home/back5.jpg'
              alt=''
            >
              <div className='list-item'>
                <span className='svg item-map'>
                  <IoMdPin />
                </span>
                MAP
              </div>
            </SquareView>

            <SquareView
              page='/2024/access'
              imgUrl='https://sekigahara-idolwars.net/images/2024/home/back6.jpg'
              alt=''
            >
              <div className='list-item'>
                <span className='svg item-access'>
                  <FaMapLocationDot />
                </span>
                ACCESS
              </div>
            </SquareView>
            <SquareView
              page='/2024/news/14'
              imgUrl='https://sekigahara-idolwars.net/images/2024/home/home8.jpg'
              alt=''
            >
              <div className='list-item'>
                <div>サテライトイベント</div>
                <div>2024/7/20(土)</div>
                <div>at 岐阜 club-G</div>
              </div>
            </SquareView>
          </div>
        </Container>
      </div>
      {/* <div className='home-ticket'>
          <ContentTitleView>チケット</ContentTitleView>
          <Link href='/ticket'>
            <div className='ticket-view'>
              <div className='ticket-content'>
                チケット情報へ
                <SlArrowRight />
              </div>
            </div>
          </Link>
        </div> */}
      <Container maxWidth='md'>
        <div className='sponsorship'>
          <ContentTitle>協賛</ContentTitle>
          <Frame>
            <SponsorshipView data={sponsorData} />
          </Frame>
          <ContentTitle>協力</ContentTitle>
          <Frame>
            <SponsorshipView data={cooperationData} />
          </Frame>
        </div>
      </Container>
      <Link href='/ticket'>
        <CircleButton className='ticket-circle-btn'>
          <IoTicketSharp className='ticket-icon' />
          <div className='ticket-fs'>チケット情報</div>
        </CircleButton>
      </Link>

      <Modal isOpen={introShow} className='intro-view intro-modal' overlayClassName='overlay'>
        <div className='intro-logo'>
          <Img
            style={{ display: `${introLogoShow ? 'block' : 'none'}` }}
            src='https://sekigahara-idolwars.net/images/2024/logo/logo_white.png'
            alt='イントロロゴ'
          />
          <div className='anv-logo' style={{ display: `${anivLogoShow ? 'block' : 'none'}` }}>
            <div className='logo-10'>
              10<span className='th'>th</span>
            </div>
            <div className='aniv'>Anniversary</div>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export const Home2024View = () => {
  return <BaseViewLayout main={<Home />} />
}

