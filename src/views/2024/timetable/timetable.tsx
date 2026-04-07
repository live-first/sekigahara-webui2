'use client'

import React from 'react'
import { Container } from '@mui/material'
import html2canvas from 'html2canvas'
import './timetable.scss'
import day1Stage1Data from './day1/stage1.json'
import day1Stage2Data from './day1/stage2.json'
import day1Stage3Data from './day1/stage3.json'
import day1Stage4Data from './day1/stage4.json'
import day1Stage5Data from './day1/stage5.json'
import day2Stage1 from './day2/stage1.json'
import day2Stage2 from './day2/stage2.json'
import day2Stage3 from './day2/stage3.json'
import day2Stage4 from './day2/stage4.json'
import day2Stage5 from './day2/stage5.json'
import day3Stage1 from './day3/stage1.json'
import day3Stage2 from './day3/stage2.json'
import day3Stage3 from './day3/stage3.json'
import day3Stage4 from './day3/stage4.json'
import day3Stage5 from './day3/stage5.json'
import { Title } from '@/components/title/title'
import { EllipseButton } from '@/components/button/ellipseButton'
import { Img } from '@/components/Image'
import { TimeTable } from '@/components/TimeTable'
import { BaseViewLayout } from '@/layouts/BaseViewLayout'
import Header from '../header/header'
import Footer from '../footer/footer'

const config = {
  tableHeadCellHeight: 100,
  tableCellHeight: 20,
  contentMargin: 2,
  contentPadding: 5,
  borderBoldInterval: 6,
  timeStringInterval: 3,
}

interface date {
  year: string
  month: string
  day: string
  youbi: string
  other: string
}

const saveAsImage = (uri: string) => {
  const downloadLink = document.createElement('a')

  if (typeof downloadLink.download === 'string') {
    downloadLink.href = uri

    // ファイル名
    downloadLink.download = 'idol-wars-2024_timetable.png'

    // Firefox では body の中にダウンロードリンクがないといけないので一時的に追加
    document.body.appendChild(downloadLink)

    // ダウンロードリンクが設定された a タグをクリック
    downloadLink.click()

    // Firefox 対策で追加したリンクを削除しておく
    document.body.removeChild(downloadLink)
  } else {
    window.open(uri)
  }
}

const exportPng = (targetId: string) => {
  // const targetTimetable = document.getElementById('base-view-id')
  // const targetTimetableArea = document.getElementById('timetable-master')
  // targetTimetable && (targetTimetable.style.overflow = 'visible')
  // targetTimetableArea && (targetTimetableArea.style.overflow = 'visible')
  // 画像に変換する component の id を指定
  const target = document.getElementById(targetId)
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  target &&
    html2canvas(target).then((canvas) => {
      const targetImgUri = canvas.toDataURL('img/png')
      saveAsImage(targetImgUri)
    })
  // targetTimetableArea && (targetTimetableArea.style.overflow = 'scroll')
  // targetTimetable && (targetTimetable.style.overflow = 'hidden')
}

const MainView = () => {
  const DateView = (props: date) => {
    const { year, month, day, youbi, other } = props
    return (
      <div className='date-area'>
        {year}年{month}月{day}日({youbi}) {other}
      </div>
    )
  }

  return (
    <div className='timetable'>
      <Container maxWidth='lg'>
        <Title english='TIME TABLE' japaniese='タイムテーブル' />
        <div className='btn-area'>
          <EllipseButton
            onClick={() => {
              exportPng('target-component1')
            }}
            className='output-btn'
          >
            マイタイムテーブルの保存
          </EllipseButton>
          <div>※PC推奨</div>
        </div>
        <div className='target-area' id='target-component1'>
          <div className='timetable-top'>
            <Img cName='logo' src='https://lime-light.tv/images/2024/logo_10th.png' alt='logo' />
            <DateView year='2024' month='7' day='19' youbi='金' other='DAY1' />
            <Img cName='logo' src='https://lime-light.tv/images/2024/logo_black.png' alt='logo' />
          </div>
          <div className='timetable-area' id='timetable-master1'>
            <TimeTable
              config={config}
              class={'stage1'}
              date={day1Stage1Data.date}
              data={day1Stage1Data.data}
              stageName={day1Stage1Data.stageName}
              open={day1Stage1Data.open}
              isTimeStringViewLeft={true}
              isTimeStringViewRight={false}
              img='https://lime-light.tv/images/2024/tokugawa_stage.png'
            />
            <TimeTable
              config={config}
              class={'stage2'}
              date={day1Stage2Data.date}
              data={day1Stage2Data.data}
              stageName={day1Stage2Data.stageName}
              open={day1Stage2Data.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={false}
              img='https://lime-light.tv/images/2024/toyotomi_stage.png'
            />
            <TimeTable
              config={config}
              class={'stage3'}
              date={day1Stage3Data.date}
              data={day1Stage3Data.data}
              stageName={day1Stage3Data.stageName}
              open={day1Stage3Data.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={false}
              img='https://lime-light.tv/images/2024/sengoku_stage.png'
            />
            <TimeTable
              config={config}
              class={'stage4'}
              date={day1Stage4Data.date}
              data={day1Stage4Data.data}
              stageName={day1Stage4Data.stageName}
              open={day1Stage4Data.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={false}
              img='https://lime-light.tv/images/2024/momokubari_stage.png'
            />
            <TimeTable
              config={config}
              class={'stage5'}
              date={day1Stage5Data.date}
              data={day1Stage5Data.data}
              stageName={day1Stage5Data.stageName}
              open={day1Stage5Data.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={true}
              img='https://lime-light.tv/images/2024/gekokujo_stage.png'
            />
          </div>
        </div>

        <div className='btn-area'>
          <EllipseButton
            onClick={() => {
              exportPng('target-component2')
            }}
            className='output-btn'
          >
            マイタイムテーブルの保存
          </EllipseButton>
          <div>※PC推奨</div>
        </div>
        <div className='target-area' id='target-component2'>
          <div className='timetable-top'>
            <Img cName='logo' src='https://lime-light.tv/images/2024/logo_10th.png' alt='logo' />
            <DateView year='2024' month='7' day='20' youbi='土' other='DAY2' />
            <Img cName='logo' src='https://lime-light.tv/images/2024/logo_black.png' alt='logo' />
          </div>
          <div className='timetable-area' id='timetable-master2'>
            <TimeTable
              config={config}
              class={'stage1'}
              date={day2Stage1.date}
              data={day2Stage1.data}
              stageName={day2Stage1.stageName}
              open={day2Stage1.open}
              isTimeStringViewLeft={true}
              isTimeStringViewRight={false}
              img='https://lime-light.tv/images/2024/tokugawa_stage.png'
            />
            <TimeTable
              config={config}
              class={'stage2'}
              date={day2Stage2.date}
              data={day2Stage2.data}
              stageName={day2Stage2.stageName}
              open={day2Stage2.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={false}
              img='https://lime-light.tv/images/2024/toyotomi_stage.png'
            />
            <TimeTable
              config={config}
              class={'stage3'}
              date={day2Stage3.date}
              data={day2Stage3.data}
              stageName={day2Stage3.stageName}
              open={day2Stage3.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={false}
              img='https://lime-light.tv/images/2024/sengoku_stage.png'
            />
            <TimeTable
              config={config}
              class={'stage4'}
              date={day2Stage4.date}
              data={day2Stage4.data}
              stageName={day2Stage4.stageName}
              open={day2Stage4.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={false}
              img='https://lime-light.tv/images/2024/momokubari_stage.png'
            />
            <TimeTable
              config={config}
              class={'stage5'}
              date={day2Stage5.date}
              data={day2Stage5.data}
              stageName={day2Stage5.stageName}
              open={day2Stage5.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={true}
              img='https://lime-light.tv/images/2024/gekokujo_stage.png'
            />
          </div>
        </div>

        <div className='btn-area'>
          <EllipseButton
            onClick={() => {
              exportPng('target-component3')
            }}
            className='output-btn'
          >
            マイタイムテーブルの保存
          </EllipseButton>
          <div>※PC推奨</div>
        </div>
        <div className='target-area' id='target-component3'>
          <div className='timetable-top'>
            <Img cName='logo' src='https://lime-light.tv/images/2024/logo_10th.png' alt='logo' />
            <DateView year='2024' month='7' day='21' youbi='日' other='DAY3' />
            <Img cName='logo' src='https://lime-light.tv/images/2024/logo_black.png' alt='logo' />
          </div>
          <div className='timetable-area' id='timetable-master3'>
            <TimeTable
              config={config}
              class={'stage1'}
              date={day3Stage1.date}
              data={day3Stage1.data}
              stageName={day3Stage1.stageName}
              open={day3Stage1.open}
              isTimeStringViewLeft={true}
              isTimeStringViewRight={false}
              img='https://lime-light.tv/images/2024/tokugawa_stage.png'
            />
            <TimeTable
              config={config}
              class={'stage2'}
              date={day3Stage2.date}
              data={day3Stage2.data}
              stageName={day3Stage2.stageName}
              open={day3Stage2.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={false}
              img='https://lime-light.tv/images/2024/toyotomi_stage.png'
            />
            <TimeTable
              config={config}
              class={'stage3'}
              date={day3Stage3.date}
              data={day3Stage3.data}
              stageName={day3Stage3.stageName}
              open={day3Stage3.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={false}
              img='https://lime-light.tv/images/2024/sengoku_stage.png'
            />
            <TimeTable
              config={config}
              class={'stage4'}
              date={day3Stage4.date}
              data={day3Stage4.data}
              stageName={day3Stage4.stageName}
              open={day3Stage4.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={false}
              img='https://lime-light.tv/images/2024/momokubari_stage.png'
            />
            <TimeTable
              config={config}
              class={'stage5'}
              date={day3Stage5.date}
              data={day3Stage5.data}
              stageName={day3Stage5.stageName}
              open={day3Stage5.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={true}
              img='https://lime-light.tv/images/2024/gekokujo_stage.png'
            />
          </div>
        </div>
      </Container>
    </div>
  )
}

const Timetable2024View = () => {
  return <BaseViewLayout header={<Header />} footer={<Footer />} main={<MainView />} />
}

export default Timetable2024View
