import React from 'react'
import { Container } from '@mui/material'
import NewsList from './newsList.tsx'
import './news.scss'
import { Title } from '@/components/title/title.tsx'
import { BaseViewLayout } from '@/layouts/BaseViewLayout.tsx'

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
  return <BaseViewLayout main={<MainView />} />
}

export default News2024View
