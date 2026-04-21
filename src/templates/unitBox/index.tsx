'use client'

import { Img } from '@/components/Image'
import './style.css'
import Link from 'next/link'
import { UnitType } from '@/domain/ranking'

export type UnitProps = UnitType

export const UnitBox = (props: UnitProps) => {
  const { name, img, x } = props

  return (
    <div className='p-3 bg-white rounded-sm border border-sekigahara custom-shadow'>
      <div className='w-full text-center justify-center overflow-hidden relative lg:h-[250px] md:h-[230px] sm:h-[200px] min-[150px]:h-[150px]'>
        <Img
          src={img.src}
          alt={img.alt}
          cName='w-full h-full absolute top-0 left-0 object-contain'
        />
      </div>
      <div className='text-sekigahara text-xl font-bold text-center h-15'>
        <p className='whitespace-pre-wrap h-full content-center break-all'>{name}</p>
      </div>
      {x && (
        <div className='flex gap-4 justify-center'>
          <Link href={`https://x.com/${x}`} target='_blank' className='w-6'>
            <Img src='https://yosen2025.sekigahara-idolwars.net/picture/x-logo.png' alt='x' />
          </Link>
        </div>
      )}
    </div>
  )
}
