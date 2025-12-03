import React from 'react'
import './menu_sp.scss'
import Link from 'next/link'

interface MenuProp {
  displayMode: string
}

export const MenuSp = (props: MenuProp) => {
  const { displayMode } = props

  return (
    <div className='menu-sp-view' style={{ display: `${displayMode}` }}>
      <ul className='nav-ul'>
        <li className='nav-li'>
          <Link href='/2024/about' className='nav-link'>
            ABOUT<span>関ケ原唄姫合戦</span>
          </Link>
        </li>
        <li className='nav-li'>
          <Link href='/2024/ticket' className='nav-link'>
            TICKET<span>チケット</span>
          </Link>
        </li>
        <li className='nav-li'>
          <Link href='/2024/lineup' className='nav-link'>
            LINE UP<span>出演者情報</span>
          </Link>
        </li>
        <li className='nav-li'>
          <div className='nav-link'>
            TIMETABLE<span>タイムテーブル</span>
          </div>
          <ul className='dropdown-ul'>
            <li className='dropdown-li'>
              <Link href='/2024/live' className='nav-link'>
                LIVE<span>ライブ</span>
              </Link>
            </li>
            <li className='dropdown-li'>
              <Link href='/2024/greeting' className='nav-link'>
                GREETING<span>物販・特典会</span>
              </Link>
            </li>
          </ul>
        </li>
        {/* <li className='nav-li'>
          <div className='nav-link'>SHOP<span>ショップ</span></div>
          <ul className='dropdown-ul'>
            <li className='dropdown-li'><Link href='/2024/goods' className='nav-link'>GOODS<span>グッズ</span></Link></li>
            <li className='dropdown-li'><Link href='/2024/foods' className='nav-link'>FOODS<span>飲食情報</span></Link></li>
          </ul>
        </li> */}
        <li className='nav-li'>
          <Link href='/2024/notice' className='nav-link'>
            NOTICE<span>注意事項</span>
          </Link>
        </li>
        <li className='nav-li'>
          <div className='nav-link'>
            MAP<span>マップ</span>
          </div>
          <ul className='dropdown-ul'>
            <li className='dropdown-li'>
              <Link href='/2024/map' className='nav-link'>
                MAP<span>マップ</span>
              </Link>
            </li>
            <li className='dropdown-li'>
              <Link href='/2024/access' className='nav-link'>
                ACCESS<span>アクセス</span>
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  )
}
