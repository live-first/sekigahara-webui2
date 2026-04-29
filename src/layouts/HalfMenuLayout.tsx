'use client'

import { cn } from '@/components/utils'
import { ReactNode, useState } from 'react'
import { IoIosArrowDropleft, IoIosArrowDropright } from 'react-icons/io'

type HalfMenuLayoutProps = {
  header?: ReactNode
  menu?: ReactNode
  main?: ReactNode
  footer?: ReactNode
}

export const HalfMenuLayout = ({ header, menu, main, footer }: HalfMenuLayoutProps) => {
  const [open, isOpen] = useState(false)

  const handleClick = () => {
    isOpen(!open)
  }

  return (
    <div className='h-full overflow-hidden flex flex-col bg-gradient-to-b from-gray-900 to-gray-800 text-white'>
      {header && (
        <header className='h-16 flex items-center justify-center text-xl font-bold'>
          {header}
        </header>
      )}
      <div className='flex'>
        {menu && (
          <div className={cn('fixed flex md:flex-col z-10 md:sticky top-0')}>
            <div className={cn(open ? '' : 'hidden md:flex')}>{menu}</div>
            <button className='w-10 h-screen md:h-full flex bg-sekigahara md:hidden' onClick={handleClick}>
              {open ? (
                <IoIosArrowDropleft className='w-full h-full' />
              ) : (
                <IoIosArrowDropright className='w-full h-full' />
              )}
            </button>
          </div>
        )}
        {open && <div className='w-10 h-full'></div>}

        {main && <main className={cn('flex-1 h-screen md:ml-0 overflow-scroll bg-gray-200', open ? 'ml-0' : 'ml-10')}>{main}</main>}
      </div>
      {footer && <footer className='h-16 flex items-center justify-center'>{footer}</footer>}
    </div>
  )
}
