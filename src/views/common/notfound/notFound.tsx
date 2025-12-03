import React from 'react'
import { Container } from '@mui/material'
import Link from 'next/link'
import { BaseView2025 } from '@/views/2025/layout'

const MainView = () => {
  return (
    <div className=''>
      <Container maxWidth='lg'>
        ページが存在しません。
        <Link href='/'>トップ</Link>に戻る
      </Container>
    </div>
  )
}

const NotFoundView = () => {
  return <BaseView2025 main={<MainView />} />
}

export default NotFoundView
