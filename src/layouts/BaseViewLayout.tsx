import React from 'react'
import { motion } from 'framer-motion'
import '../index.css'

export type BaseViewProps = {
  header?: React.ReactNode
  main?: React.ReactNode
  footer?: React.ReactNode
  semiModal?: React.ReactNode
}

export const BaseViewLayout: React.FC<BaseViewProps> = (props: BaseViewProps) => {
  const { header, main, footer, semiModal } = props
  const pageTransition = {
    duration: 1,
    opacity: { ease: 'easeOut', duration: 1 },
  }

  return (
    <div className='base-view'>
      <div className='header-space'></div>
      <header>{header}</header>
      <main>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={pageTransition}
        >
          {main}
        </motion.div>
      </main>
      <footer>{footer}</footer>
      {semiModal}
      <div className='door-left'></div>
      <div className='door-right'></div>
    </div>
  )
}
