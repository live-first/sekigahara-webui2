import React from 'react'
import { Container } from '@mui/material'
import './ticket.scss'
import { Title } from '@/components/title/title'
import { Img } from '@/components/Image'
import Link from 'next/link'
import { BaseViewLayout } from '@/layouts/BaseViewLayout'

const MainView = () => {
  return (
    <div className='ticket'>
      <Container maxWidth='md'>
        <Title english='TICKET' japaniese='チケット情報' />
        <div className='ticket-img-view'>
          <Img src='https://sekigahara-idolwars.net/images/2024/home/ticket.jpg' alt='ticket1' />
        </div>
        <Link href='https://tiget.net/events/330277'>
          <div className='ticket-link-btn'>チケットの購入はこちら</div>
        </Link>

        <div>▼必ず注意事項をご確認お願いします。</div>
        <Link href='/notice'>
          <div className='ticket-notice'>注意事項</div>
        </Link>
      </Container>
    </div>
  )
}

const Ticket2024View = () => {
  return <BaseViewLayout main={<MainView />} />
}

export default Ticket2024View
