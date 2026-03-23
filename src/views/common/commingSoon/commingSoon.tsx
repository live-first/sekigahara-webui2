import React, { PropsWithChildren } from 'react'
import './commingSoon.css'
import { Img } from '@/components/Image/index.tsx'

export const CommingSoonView = (props: PropsWithChildren) => {
  const { children } = props

  return (
    <div className='com-soon'>
      <Img cName='p-6' src='https://sekigahara-idolwars.net/images/2026/logo_2026.png' alt='logo' />
      <div>{children}</div>
    </div>
  )
}
