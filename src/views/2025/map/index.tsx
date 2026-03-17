'use client'

import { Container } from '@mui/material'
import { BaseView2025 } from '../layout/index.tsx'
import { Title } from '@/components/title/title.tsx'
import { Img } from '@/components/Image/index.tsx'

const Map = () => {
  return (
    <Container maxWidth='lg'>
      <Title english='MAP' japaniese='エリアマップ' />
      <div className='flex flex-col py-6'>
        <Img src='https://sekigahara-idolwars.net/images/2025/map/area_map.JPG' alt='area_map' />
      </div>
    </Container>
  )
}

export const Map2025View = () => {
  return (
    <BaseView2025>
      <Map />
    </BaseView2025>
  )
}
