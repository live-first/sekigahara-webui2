import Link from 'next/link'
import { FaHome } from 'react-icons/fa'
import { RiMusicAiFill } from 'react-icons/ri'
import { FaRankingStar } from 'react-icons/fa6'
import { PiArrowSquareOutLight } from 'react-icons/pi'
import { GiOpenBook } from 'react-icons/gi'
import { GiMicrophone } from 'react-icons/gi'
import { Img } from '@/components/Image'
import { PropsWithChildren } from 'react'

export const MenuView = () => {
  const MenuContents = ({ children }: PropsWithChildren) => {
    return (
      <div className='flex border-b border-white h-12 gap-3 items-center pl-4 text-xl font-bold leading-5'>
        {children}
      </div>
    )
  }

  return (
    <div className='flex flex-col bg-sekigahara h-screen w-full'>
      <Link href='/'>
        <MenuContents>
          <FaHome />
          トップ
        </MenuContents>
      </Link>
      <Link href='/live'>
        <MenuContents>
          <RiMusicAiFill />
          ライブ
        </MenuContents>
      </Link>
      <Link href='/ranking'>
        <MenuContents>
          <FaRankingStar />
          ランキング
        </MenuContents>
      </Link>
      <Link href='/' target='_blank'>
        <MenuContents>
          <Img
            src='https://sekigahara-idolwars.net/images/with_collection_icon.png'
            alt='Withコレ'
            cName='rounded-full w-6 h-6'
            notNext
          />
          Withコレ
          <br />
          ランキング
          <PiArrowSquareOutLight />
        </MenuContents>
      </Link>
      <Link href='/artists' target='_blank'>
        <MenuContents>
          <GiMicrophone />
          参戦者
        </MenuContents>
      </Link>
      <Link href='/rules' target='_blank'>
        <MenuContents>
          <GiOpenBook />
          ルール
        </MenuContents>
      </Link>
      <div className='flex gap-8 p-4 justify-center'>
        <Link href='https://x.com/_IDOLWARS' className='bg-white rounded-full w-16 h-16 p-4'>
          <Img src='https://sekigahara-idolwars.net/images/x-logo-black.png' alt='x-logo' />
        </Link>
        <Link
          href='https://www.instagram.com/_idolwars'
          className='bg-white rounded-full w-16 h-16 p-2'
        >
          <Img
            src='https://sekigahara-idolwars.net/images/Instagram-logo-color.png'
            alt='instagram-logo'
          />
        </Link>
      </div>
    </div>
  )
}
