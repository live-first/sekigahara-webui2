import React from 'react'
import { Button } from './button.tsx'
import './button.css'

type Props = {
  className?: string
  children?: React.ReactNode
  onClick?: () => void
  radius?: string
  width?: string
  height?: string
  color?: string
  disabled?: boolean
}

export const EllipseButton = (props: Props) => {
  const { className, children, onClick, disabled } = props
  return (
    <Button
      className={`ellipse-btn ${className}`}
      // radius={radius}
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
