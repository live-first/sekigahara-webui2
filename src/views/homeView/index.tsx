'use client'

import { Heading } from '@/components/Heading'
import Link from 'next/link'
import { PropsWithChildren } from 'react'
import { Container } from '@mui/material'
import SlideUpAnimation from '@/components/animation/slideUpAnimation'
import { eventPresenter } from '@/presenter/eventPresenter'

export const HomeView = () => {
  const { events } = eventPresenter()

  const Section = ({ children }: PropsWithChildren) => {
    return (
      <SlideUpAnimation>
        <div className='flex flex-col w-full gap-2 items-center'>{children}</div>
      </SlideUpAnimation>
    )
  }

  return (
    <div className='flex flex-col gap-32 py-8 justify-center px-1 md:px-6'>
      <Section>
        <Heading tag={2} label='TOPIC' />
        <Container maxWidth='md'></Container>
        <Link href='/events'>
          <span className='flex px-20 py-4 mt-8 border bg-white'>全てのイベントを見る</span>
        </Link>
      </Section>
      <Section>
        <Heading tag={2} label="Girl's Bomb!!" />
        <Container maxWidth='md'></Container>
        <Link href='/events'>
          <span className='flex px-20 py-4 mt-8 border bg-white'>全てのイベントを見る</span>
        </Link>
      </Section>
      <Section>
        <Heading tag={2} label='GIRLS BOX' />
        <Container maxWidth='md'></Container>
        <Link href='/events'>
          <span className='flex px-20 py-4 mt-8 border bg-white'>全てのイベントを見る</span>
        </Link>
      </Section>
      <Section>
        <Heading tag={2} label='GIRLS MUSIC SQUARE' />
        <Container maxWidth='md'></Container>
        <Link href='/events'>
          <span className='flex px-20 py-4 mt-8 border bg-white'>全てのイベントを見る</span>
        </Link>
      </Section>
      <Section>
        <Heading tag={2} label="Girl's Live Diary" />
        <Container maxWidth='md'></Container>
        <Link href='/events'>
          <span className='flex px-20 py-4 mt-8 border bg-white'>全てのイベントを見る</span>
        </Link>
      </Section>
      <Section>
        <Heading tag={2} label='GIRLS INFINITY' />
        <Container maxWidth='md'></Container>
        <Link href='/events'>
          <span className='flex px-20 py-4 mt-8 border bg-white'>全てのイベントを見る</span>
        </Link>
      </Section>
      <Section>
        <Heading tag={2} label='ガルボム撮影会' />
        <Container maxWidth='md'></Container>
        <Link href='/events'>
          <span className='flex px-20 py-4 mt-8 border bg-white'>全てのイベントを見る</span>
        </Link>
      </Section>
      <Section>
        <Heading tag={2} label='Schedule' />
        <div className='flex flex-col gap-6 w-full'>
          <iframe
            src='https://calendar.google.com/calendar/embed?height=600&amp;wkst=2&amp;bgcolor=%23ffffff&amp;ctz=Asia%2FTokyo&amp;src=Z2lybHNib21iLmV2ZW50QGdtYWlsLmNvbQ&amp;src=amFwYW5lc2VfX2phQGhvbGlkYXkuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23D50000&amp;color=%23D81B60&amp;showTitle=0&amp;showPrint=0&amp;showCalendars=0&amp;showTabs=0'
            width='100%'
            height='600'
          ></iframe>
          <iframe
            title='カレンダー'
            src='https://timetreeapp.com/public_calendars/girlsbomb/embed/monthly?calendar_name=true&frame_color=%23fdc02d'
            className='w-full'
            width='100%'
            height='600'
          ></iframe>
        </div>
      </Section>

      <Section>
        <Heading tag={2} label='CONTACT' />
        <div className='flex flex-col gap-4 text-center pt-4'>
          <p>イベントへのお問い合わせ、出演希望</p>
          <p>その他のお問い合わせは下記までお願いします。</p>
        </div>
        <Link href='/contact'>
          <span className='flex px-20 py-4 mt-8 border bg-black'>お問い合わせはこちら</span>
        </Link>
      </Section>
    </div>
  )
}
