import React, { useState } from 'react'
import './header.scss'
import Link from 'next/link'
import { Img } from '@/components/Image/index.tsx'
import Menu from '../menu/menu'
import { MenuSp } from '../menu/menu_sp'

const Header = () => {
  const [value, setValue] = useState(false)

  const classToggle = () => {
    setValue(!value)
  }

  return (
    <div className='header-body'>
      <Link href='/2024' className='logo'>
        <Img cName='logo' src='https://lime-light.tv/images/2024/logo/headerlogo.svg' alt='logo' />
      </Link>
      <div className='menu-nav-pc'>
        <Menu displayMode={'inline-flex'} />
      </div>
      <div className='menu-nav-sp'>
        <MenuSp displayMode={value ? 'block' : 'none'} />
      </div>
      <div className={`hamburger-menu ${value ? 'active' : ''}`} id='menu01' onClick={classToggle}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  )
}

export default Header
