import React from 'react'
import { Button } from './button.tsx'
import './button.css'

type Props = {
  className?: string
  children?: React.ReactNode
  onClick?: () => void
  width?: string
  height?: string
  color?: string
  disabled?: boolean
}

export const CircleButton = (props: Props) => {
  const { className, children, onClick, disabled } = props
  return (
    <Button
      className={`circle-btn ${className}`}
      // radius='50%'
      // width={width}
      // height={height}
      // color={color}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </Button>
  )
}

export default CircleButton
