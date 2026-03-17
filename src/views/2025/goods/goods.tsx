'use client'

import React from 'react'
import { Container } from '@mui/material'
import './goods.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import data from '../../../resource/goods.json'
import SlideUpAnimation from '@/components/animation/slideUpAnimation.tsx'
import { Img } from '@/components/Image/index.tsx'
import { Modal } from '@/components/Modal'
import { Title } from '@/components/title/title'
import { BaseViewLayout } from '@/layouts/BaseViewLayout'

interface Data {
  data: GoodsData
}

type GoodsData = {
  goodsName: string
  sozai: string
  size: string
  price: string
  image: Array<string>
  other?: string
}

interface SliderData {
  data: Array<string>
}

export const Slider = (props: SliderData) => {
  const { data } = props

  return (
    <div className='goods-swiper'>
      <Swiper
        modules={[Navigation, Pagination]}
        pagination={{ clickable: true, el: '#pagination' }}
        mousewheel={true}
        centeredSlides={true}
      >
        {Object.values(data).map((data, index) => {
          return (
            <SwiperSlide key={index}>
              <div className='img-area'>
                <Img cName='goods-img' src={data} alt='' />
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
      <div id='pagination' className='swiper-pagination custom-pagination'></div>
    </div>
  )
}

const MainView = () => {
  const replaceMsg = (msg: string) => {
    return msg.replace(/\n/g, '<br />')
  }

  const GoodsBoxModal = (props: Data) => {
    const { data } = props
    return (
      <SlideUpAnimation>
        <div className='modal-base goods-modal-base'>
          <Modal button={<Img src={data.image[0]} alt='' />}>
            <div>
              <div className='goods-name'>{replaceMsg(data.goodsName)}</div>
              <div className='goods-price'>{data.price}</div>
              <div className='goods-size'>{data.size}</div>
              <div className='goods-sozai'>{data.sozai}</div>
              {data.other ? <div className='goods-other'>{data.other}</div> : ''}
            </div>
          </Modal>
        </div>
      </SlideUpAnimation>
    )
  }

  return (
    <div className='goods'>
      <Container maxWidth='md'>
        <Title english='GOODS' japaniese='グッズ情報' />
        <div className='grid grid-cols-2 sm:grid-cols-3 gap-2 md:gap-6'>
          {Object.values(data).map((data, index) => {
            return <GoodsBoxModal data={data} key={index} />
          })}
        </div>
      </Container>
    </div>
  )
}

export const GoodsView = () => {
  return <BaseViewLayout main={<MainView />} />
}
