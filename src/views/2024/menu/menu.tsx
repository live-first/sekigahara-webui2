import React from 'react'
import './menu.scss'
import Link from 'next/link'

interface MenuProp {
  displayMode: string
}
const Menu = (props: MenuProp) => {
  const { displayMode } = props

  return (
    <div className='menu-view' style={{ display: `${displayMode}` }}>
      <ul className='nav-ul'>
        <li className='nav-li'>
          <Link href='/2024/about' className='nav-link'>
            ABOUT<div>関ケ原唄姫合戦</div>
          </Link>
        </li>
        <li className='nav-li'>
          <Link href='/2024/ticket' className='nav-link'>
            TICKET<div>チケット</div>
          </Link>
        </li>
        <li className='nav-li'>
          <Link href='/2024/lineup' className='nav-link'>
            LINE UP<div>出演者情報</div>
          </Link>
        </li>
        <li className='nav-li'>
          <div className='nav-link'>
            TIMETABLE<div>タイムテーブル</div>
          </div>
          <ul className='dropdown-menu'>
            <li className='dropdown-li'>
              <Link href='/2024/live' className='nav-link'>
                LIVE<div>ライブ</div>
              </Link>
            </li>
            <li className='dropdown-li'>
              <Link href='/2024/greeting' className='nav-link'>
                GREETING<div>物販・特典会</div>
              </Link>
            </li>
          </ul>
        </li>
        {/* <li className='nav-li'>
          <div className='nav-link'>SHOP<div>ショップ</div></div>
          <ul className='dropdown-menu'>
            <li className='dropdown-li'><Link href='/2024/goods' className='nav-link'>GOODS<div>グッズ</div></Link></li>
            <li className='dropdown-li'><Link href='/2024/foods' className='nav-link'>FOODS<div>飲食情報</div></Link></li>
          </ul>
        </li> */}
        <li className='nav-li'>
          <Link href='/2024/notice' className='nav-link'>
            NOTICE<div>注意事項</div>
          </Link>
        </li>
        <li className='nav-li'>
          <div className='nav-link'>
            MAP<div>マップ</div>
          </div>
          <ul className='dropdown-menu'>
            <li className='dropdown-li'>
              <Link href='/2024/map' className='nav-link'>
                MAP<div>マップ</div>
              </Link>
            </li>
            <li className='dropdown-li'>
              <Link href='/2024/access' className='nav-link'>
                ACCESS<div>アクセス</div>
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  )
}

export default Menu
