import React from 'react'
import './cardView.scss'

interface CardProps {
  children?: React.ReactNode
}

export const CardView = (props: CardProps) => {
  const { children } = props
  return <div className='card-view'>{children}</div>
}
