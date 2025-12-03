import { Container } from '@mui/material'
import { BaseView2025 } from '../layout/index.tsx'
import { OutlineView } from '../../2024/outline/outline.tsx'
import './index.css'
import { Img } from '@/components/Image/index.tsx'
import { Title } from '@/components/title/title.tsx'

export const About = () => {
  return (
    <div className='about'>
      <Container maxWidth='xl'>
        <Title english='ABOUT' japaniese='イベント概要' />
        <div className='pt-20 h-dvh md:pt-28 px-2 md:px-28 lg:px-36 w-full bg-gradient justify-center justify-items-center'>
          <div className='flex top-box relative border-6 rounded-3xl border-sekigahara bg-white'>
            <Img
              src='https://sekigahara-idolwars.net/images/2025/news/about1.jpg'
              alt='top1'
              cName='change rounded-2xl'
              notNext
            />
            <Img
              src='https://sekigahara-idolwars.net/images/2025/news/about2.jpeg'
              alt='top2'
              cName='change rounded-2xl'
              notNext
            />
            <Img
              src='https://sekigahara-idolwars.net/images/2025/news/about3.jpeg'
              alt='top3'
              cName='change rounded-2xl'
              notNext
            />
            <Img
              src='https://sekigahara-idolwars.net/images/2025/news/about4.jpeg'
              alt='top4'
              cName='change rounded-2xl'
              notNext
            />
            <Img
              src='https://sekigahara-idolwars.net/images/2025/news/about5.jpg'
              alt='top5'
              cName='change rounded-2xl'
              notNext
            />
          </div>
        </div>
        <OutlineView
          logo='https://sekigahara-idolwars.net/images/2025/logo.png'
          title='SEKIGAHARA IDOL WARS -関ケ原唄姫合戦2025-'
          date='2025年7月19日(土),20日(日),21日(月祝)'
        />
      </Container>
    </div>
  )
}

export const AboutView = () => {
  return (
    <BaseView2025>
      <About />
    </BaseView2025>
  )
}
