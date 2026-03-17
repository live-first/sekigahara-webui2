'use client'

import { Container } from '@mui/material'
import './access.scss'
import { BaseView2025 } from '../../2025/layout/index.tsx'
import { Img } from '@/components/Image/index.tsx'
import { Title } from '@/components/title/title.tsx'
import { EllipseButton } from '@/components/button/ellipseButton.tsx'
import Link from 'next/link'

const MainView = () => {
  return (
    <div className='access'>
      <Container maxWidth='md'>
        <Title english='ACCESS' japaniese='会場アクセス' />
        <div className='access-info'>
          <div className='row'>
            <div className='col-head'>会場</div>
            <div className='col'>
              <div>桃配運動公園</div>
              <div>〒503-1532 岐阜県不破郡関ケ原町野上1673-11</div>
              <div>「関ケ原駅」よりバスで約10分</div>
            </div>
          </div>
        </div>
        <div className='flex flex-col w-full items-center'>
          <iframe
            title='access-map'
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3253.5782728519935!2d136.49103081142948!3d35.366111072576665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6003cac1c371e95b%3A0x9f50d1867cf24afd!2z5qGD6YWN6YGL5YuV5YWs5ZyS!5e0!3m2!1sja!2sjp!4v1708770099558!5m2!1sja!2sjp'
            width='600'
            height='450'
            style={{ border: 0 }}
            loading='lazy'
          ></iframe>
        </div>
        <div className='bus-info pb-12'>
          <div className='row'>
            <div className='col-head'>駐車場情報</div>
            <div className='col flex flex-col gap-4'>
              <div className='bus-image'>
                <Img src='https://sekigahara-idolwars.net/images/2025/parking.jpeg' alt='bus' />
              </div>
              <div className='flex flex-col items-center'>
                <EllipseButton className='bg-sekigahara text-white hover:bg-[#fe7e7e] px-4 w-52'>
                  <Link href='tiget.net/events/414947'>第一駐車場チケット</Link>
                </EllipseButton>
              </div>
            </div>
          </div>
        </div>
        <div className='bus-info'>
          <div className='row'>
            <div className='col-head'>バス情報</div>
            <div className='col'>
              <div>JR関ケ原駅↔︎桃配運動公園</div>
              <div>金額：片道 ¥600-</div>
              <div className='bus-image'>
                <Img src='https://sekigahara-idolwars.net/images/2025/bus/bus_info.JPG' alt='bus' />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export const Access2025View = () => {
  return (
    <BaseView2025>
      <MainView />
    </BaseView2025>
  )
}
