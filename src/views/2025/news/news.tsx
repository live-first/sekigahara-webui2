import React from 'react'
import { Container } from '@mui/material'
import { NewsList } from './newsList.tsx'
import { BaseView2025 } from '../layout/index.tsx'
import { Title } from '@/components/title/title.tsx'

export const News2025View = () => {
  return (
    <BaseView2025>
      <div className='news'>
        <Container maxWidth='md'>
          <Title english='NEWS' japaniese='お知らせ' />
          <NewsList max={10} isPagination={true} />
        </Container>
      </div>
    </BaseView2025>
  )
}
