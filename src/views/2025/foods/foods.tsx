import React from 'react'
import { Container } from '@mui/material'
import './foods.scss'
import { CommingSoonView } from '../../common/commingSoon/commingSoon.tsx'
import { Title } from '@/components/title/title.tsx'
import { BaseViewLayout } from '@/layouts/BaseViewLayout.tsx'

const MainView = () => {
  return (
    <div className='foods'>
      <Container maxWidth='md'>
        <Title english='FOODS' japaniese='飲食店情報' />
        <CommingSoonView />
      </Container>
    </div>
  )
}

export const FoodsView = () => {
  return <BaseViewLayout main={<MainView />} />
}
