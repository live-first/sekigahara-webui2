import React from 'react'
import { Container } from '@mui/material'
import './map.scss'
import { Title } from '@/components/title/title'
import { Img } from '@/components/Image'
import { BaseViewLayout } from '@/layouts/BaseViewLayout'

const MainView = () => {
  return (
    <div className='map'>
      <Container maxWidth='lg'>
        <Title english='MAP' japaniese='エリアマップ' />
        <div className='map-img-view'>
          <Img src='https://sekigahara-idolwars.net/images/2024/map/map.jpg' alt='map1' />
          {/* <div className='title-font'>徳川ステージ</div>
          <img src='https://sekigahara-idolwars.net/images/2024/stage/tokugawa.jpg' alt='map1' />
          <div className='title-font'>豊臣ステージ</div>
          <img src='https://sekigahara-idolwars.net/images/2024/stage/toyotomi.jpg' alt='map1' />
          <div className='title-font'>戦国ステージ</div>
          <img src='https://sekigahara-idolwars.net/images/2024/stage/sengoku.jpg' alt='map1' />
          <div className='title-font'>桃配ステージ</div>
          <img src='https://sekigahara-idolwars.net/images/2024/stage/momokubari.jpg' alt='map1' />
          <div className='title-font'>下剋上ステージ</div>
          <img src='https://sekigahara-idolwars.net/images/2024/stage/gekokujo.jpg' alt='map1' /> */}
        </div>
      </Container>
    </div>
  )
}

const Map2024View = () => {
  return <BaseViewLayout main={<MainView />} />
}

export default Map2024View
