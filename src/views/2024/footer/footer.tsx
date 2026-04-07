import React from 'react'
import { Img } from '@/components/Image/index.tsx'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='flex flex-col gap-4 py-6 text-center bg-[#e14040]'>
      <Link href='/2024/' className='flex justify-center pt-4'>
        <Img
          cName='w-[50%] min-w-[200px] max-w-[500px]'
          src='https://lime-light.tv/images/2024/logo/headerlogo.svg'
          alt='logo'
        />
      </Link>
      <div className='copy-rights'>IDOLWARS実行委員会 2024 All Right Reserved.</div>
    </div>
  )
}

export default Footer
