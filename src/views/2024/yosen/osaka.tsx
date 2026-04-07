import React from 'react'
import './yosen.scss'
import { YosenAccordion } from '@/templates/accordion/YosenAccordion'

export const OsakaView = () => {
  return (
    <div className='osaka-view'>
      <YosenAccordion
        cName='osaka'
        title='其の四'
        date='2024年5月26日（日）'
        place='京橋Arc'
        open='18:00'
        start='18:30'
        artists='LUNETTA/SITRA. /みらくらんど/Cent Heaven'
        image1='https://lime-light.tv/images/2024/osaka/4/1.jpeg'
        ticket='https://tiget.net/events/322809'
      />
      <YosenAccordion
        cName='osaka'
        title='其の三'
        date='2024年5月26日（日）'
        place='京橋Arc'
        open='13:00'
        start='13:30'
        artists='LUNETTA/SITRA. /みらくらんど'
        image1='https://lime-light.tv/images/2024/osaka/3/1.jpeg'
        ticket='https://tiget.net/events/322808'
      />
      <YosenAccordion
        cName='osaka'
        title='其の二'
        date='2024年5月24日（金）'
        place='心斎橋SUNHALL'
        open='18:30'
        start='18:50'
        artists='LUNETTA/Le☆miel/SITRA. /みらくらんど/Cent Heaven 　＜ゲスト＞KRD8'
        image1='https://lime-light.tv/images/2024/osaka/2/1.jpeg'
        ticket='https://tiget.net/events/321688'
      />

      <YosenAccordion
        cName='osaka'
        title='其の一'
        date='2024年5月17日（金）'
        place='OSAKA RUIDO'
        open='18:30'
        start='19:00'
        artists='マイノリティアラート/LUNETTA/SITRA./Le☆miel/みらくらんど'
        image1='https://lime-light.tv/images/2024/osaka/1/1.jpeg'
        image2='https://lime-light.tv/images/2024/osaka/1/2.jpeg'
        ticket='https://tiget.net/events/320727'
      />
    </div>
  )
}
