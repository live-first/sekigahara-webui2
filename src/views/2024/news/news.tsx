'use client'

import React from 'react'
import { Container } from '@mui/material'
import { NewsList } from './newsList.tsx'
import { Title } from '@/components/title/title.tsx'
import { BaseViewLayout } from '@/layouts/BaseViewLayout.tsx'
import Header from '../header/header.tsx'
import Footer from '../footer/footer.tsx'

const MainView = () => {
  return (
    <div className='news'>
      <Container maxWidth='md'>
        <Title english='NEWS' japaniese='お知らせ' />
        <NewsList max={10} isPagination={true} />
      </Container>
    </div>
  )
}

const News2024View = () => {
  return <BaseViewLayout header={<Header />} footer={<Footer />} main={<MainView />} />
}

export default News2024View
