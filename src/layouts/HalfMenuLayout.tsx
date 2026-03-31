'use client'

import { ReactNode } from 'react'

type HalfMenuLayoutProps = {
  header?: ReactNode
  menu?: ReactNode
  main?: ReactNode
  footer?: ReactNode
}

export const HalfMenuLayout = ({ header, menu, main, footer }: HalfMenuLayoutProps) => {
  return (
    <div className='h-screen flex flex-col bg-gradient-to-b from-gray-900 to-gray-800 text-white'>
      {header && (
        <header className='h-16 flex items-center justify-center text-xl font-bold'>
          {header}
        </header>
      )}
      <div className='flex'>
        {menu && <div className='flex flex-col sticky top-0'>{menu}</div>}
        {main && <main className='flex-1 h-screen overflow-scroll bg-gray-200'>{main}</main>}
      </div>
      {footer && <footer className='h-16 flex items-center justify-center'>{footer}</footer>}
    </div>
  )
}
