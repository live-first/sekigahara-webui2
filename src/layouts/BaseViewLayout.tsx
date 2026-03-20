'use client'

import React from 'react'
import './index.css'

export type BaseViewProps = {
  header?: React.ReactNode
  main?: React.ReactNode
  footer?: React.ReactNode
  semiModal?: React.ReactNode
}

export const BaseViewLayout: React.FC<BaseViewProps> = (props: BaseViewProps) => {
  const { header, main, footer, semiModal } = props

  return (
    <div className='base-view'>
      <div className='header-space'></div>
      <header>{header}</header>
      <main>
        <div>
          {main}
        </div>
      </main>
      <footer>{footer}</footer>
      {semiModal}
      <div className='door-left'></div>
      <div className='door-right'></div>
    </div>
  )
}
