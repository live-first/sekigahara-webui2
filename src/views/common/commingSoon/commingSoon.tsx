import React, { PropsWithChildren } from 'react'
import './commingSoon.scss'
import { BaseView2025 } from '../../2025/layout/index.tsx'
import { Img } from '@/components/Image/index.tsx'

export const CommingSoonView = (props: PropsWithChildren) => {
  const { children } = props

  return (
    <BaseView2025>
      <div className='com-soon'>
        <Img cName='p-6' src='https://sekigahara-idolwars.net/images/2025/logo.png' alt='logo' />
        <div className='message'>Comming Soon ...</div>
        <div>{children}</div>
      </div>
    </BaseView2025>
  )
}
