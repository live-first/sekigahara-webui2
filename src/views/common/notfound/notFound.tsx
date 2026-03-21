'use client'

import React from 'react'
import { Container } from '@mui/material'
import Link from 'next/link'

export const NotFoundView = () => {
  return (
    <div className=''>
      <Container maxWidth='lg'>
        ページが存在しません。
        <Link href='/'>トップ</Link>に戻る
      </Container>
    </div>
  )
}
