import React, { PropsWithChildren } from 'react'
import './squareView.css'
import Link from 'next/link'
import { Img } from '@/components/Image'

type SquareViewProps = {
  page: string
  imgUrl: string
  alt: string
}

export const SquareView = (props: PropsWithChildren<SquareViewProps>) => {
  const { page, imgUrl, alt, children } = props

  return (
    <Link href={page}>
      <div className='square-view'>
        <Img cName='background-img' src={imgUrl} alt={alt} />
        <div className='front-view'></div>
        <div className='front-text'>{children}</div>
      </div>
    </Link>
  )
}
