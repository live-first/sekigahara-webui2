'use client'

import React from 'react'
import { Container } from '@mui/material'
import { BaseViewLayout } from '@/layouts/BaseViewLayout'

const MainView = () => {
  return (
    <Container maxWidth='lg'>
      <div className='flex flex-col gap-4 pt-6'>
        <h2 className='text-xl text-center'>ただいまメンテナンス中です。</h2>
        <p>ただいま、メンテナンス中です。ご迷惑をおかけしますが、ご了承ください。</p>
      </div>
    </Container>
  )
}

export const MaintenanceView = () => {
  return <BaseViewLayout main={<MainView />} />
}
