'use client'

import { Container } from '@mui/material'
import '../timetable.scss'

import { BaseView2025 } from '../../layout/index.tsx'
import { d1Tent1 } from './day1/tent1.ts'
import { d1Tent2 } from './day1/tent2.ts'
import { d1Tent3 } from './day1/tent3.ts'
import { d1Tent4 } from './day1/tent4.ts'
import { d1Tent5 } from './day1/tent5.ts'
import { d1Tent6 } from './day1/tent6.ts'
import { d1Tent7 } from './day1/tent7.ts'
import { d1Tent8 } from './day1/tent8.ts'
import { d1Tent9 } from './day1/tent9.ts'
import { d1Tent10 } from './day1/tent10.ts'
import { d1Tent11 } from './day1/tent11.ts'
import { d1Tent12 } from './day1/tent12.ts'
import { d1Tent13 } from './day1/tent13.ts'
import { d1Tent14 } from './day1/tent14.ts'
import { d1Tent15 } from './day1/tent15.ts'
import { d1Tent16 } from './day1/tent16.ts'
import { d1Tent17 } from './day1/tent17.ts'
import { d1Tent18 } from './day1/tent18.ts'
import { d1Tent19 } from './day1/tent19.ts'
import { d1Tent20 } from './day1/tent20.ts'
import { d1Tent21 } from './day1/tent21.ts'
import { d1Tent22 } from './day1/tent22.ts'
import { d1Tent23 } from './day1/tent23.ts'
import { d1Tent24 } from './day1/tent24.ts'
import { d1Tent25 } from './day1/tent25.ts'
import { d1Tent26 } from './day1/tent26.ts'
import { d1Tent27 } from './day1/tent27.ts'
import { d1Tent28 } from './day1/tent28.ts'
import { d1Tent29 } from './day1/tent29.ts'

import { d2Tent1 } from './day2/tent1.ts'
import { d2Tent2 } from './day2/tent2.ts'
import { d2Tent3 } from './day2/tent3.ts'
import { d2Tent4 } from './day2/tent4.ts'
import { d2Tent5 } from './day2/tent5.ts'
import { d2Tent6 } from './day2/tent6.ts'
import { d2Tent7 } from './day2/tent7.ts'
import { d2Tent8 } from './day2/tent8.ts'
import { d2Tent9 } from './day2/tent9.ts'
import { d2Tent10 } from './day2/tent10.ts'
import { d2Tent11 } from './day2/tent11.ts'
import { d2Tent12 } from './day2/tent12.ts'
import { d2Tent13 } from './day2/tent13.ts'
import { d2Tent14 } from './day2/tent14.ts'
import { d2Tent15 } from './day2/tent15.ts'
import { d2Tent16 } from './day2/tent16.ts'
import { d2Tent17 } from './day2/tent17.ts'
import { d2Tent18 } from './day2/tent18.ts'
import { d2Tent19 } from './day2/tent19.ts'
import { d2Tent20 } from './day2/tent20.ts'
import { d2Tent21 } from './day2/tent21.ts'
import { d2Tent22 } from './day2/tent22.ts'
import { d2Tent23 } from './day2/tent23.ts'
import { d2Tent24 } from './day2/tent24.ts'
import { d2Tent25 } from './day2/tent25.ts'
import { d2Tent26 } from './day2/tent26.ts'
import { d2Tent27 } from './day2/tent27.ts'
import { d2Tent28 } from './day2/tent28.ts'
import { d2Tent29 } from './day2/tent29.ts'

import { d3Tent1 } from './day3/tent1.ts'
import { d3Tent2 } from './day3/tent2.ts'
import { d3Tent3 } from './day3/tent3.ts'
import { d3Tent4 } from './day3/tent4.ts'
import { d3Tent5 } from './day3/tent5.ts'
import { d3Tent6 } from './day3/tent6.ts'
import { d3Tent7 } from './day3/tent7.ts'
import { d3Tent8 } from './day3/tent8.ts'
import { d3Tent9 } from './day3/tent9.ts'
import { d3Tent10 } from './day3/tent10.ts'
import { d3Tent11 } from './day3/tent11.ts'
import { d3Tent12 } from './day3/tent12.ts'
import { d3Tent13 } from './day3/tent13.ts'
import { d3Tent14 } from './day3/tent14.ts'
import { d3Tent15 } from './day3/tent15.ts'
import { d3Tent16 } from './day3/tent16.ts'
import { d3Tent17 } from './day3/tent17.ts'
import { d3Tent18 } from './day3/tent18.ts'
import { d3Tent19 } from './day3/tent19.ts'
import { d3Tent20 } from './day3/tent20.ts'
import { d3Tent21 } from './day3/tent21.ts'
import { d3Tent22 } from './day3/tent22.ts'
import { d3Tent23 } from './day3/tent23.ts'
import { d3Tent24 } from './day3/tent24.ts'
import { d3Tent25 } from './day3/tent25.ts'
import { d3Tent26 } from './day3/tent26.ts'
import { d3Tent27 } from './day3/tent27.ts'
import { d3Tent28 } from './day3/tent28.ts'
import { d3Tent29 } from './day3/tent29.ts'
import { Title } from '@/components/title/title.tsx'
import { TimeTable } from '@/components/TimeTable/index.tsx'
import { Img } from '@/components/Image/index.tsx'

const config = {
  tableHeadCellHeight: 20,
  tableCellHeight: 10,
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
    <div className='timetable mb-10'>
      <Container maxWidth='lg'>
        <Title english='GREETING' japaniese='物販・特典会情報' />
        <div className='target-area mt-10'>
          <div className='timetable-top'>
            <Img cName='logo' src='https://lime-light.tv/images/2025/app_logo.png' alt='logo' />
            <DateView year='2025' month='7' day='19' youbi='土' other='DAY1' />
            <Img cName='logo' src='https://lime-light.tv/images/2025/logo.png' alt='logo' />
          </div>
          <div className='timetable-area'>
            <TimeTable
              config={config}
              class={'tent1'}
              date={d1Tent1.date}
              data={d1Tent1.data}
              stageName={d1Tent1.stageName}
              open={d1Tent1.open}
              isTimeStringViewLeft={true}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent1'}
              date={d1Tent2.date}
              data={d1Tent2.data}
              stageName={d1Tent2.stageName}
              open={d1Tent1.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent1'}
              date={d1Tent3.date}
              data={d1Tent3.data}
              stageName={d1Tent3.stageName}
              open={d1Tent1.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent1'}
              date={d1Tent4.date}
              data={d1Tent4.data}
              stageName={d1Tent4.stageName}
              open={d1Tent1.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent1'}
              date={d1Tent5.date}
              data={d1Tent5.data}
              stageName={d1Tent5.stageName}
              open={d1Tent1.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent2'}
              date={d1Tent6.date}
              data={d1Tent6.data}
              stageName={d1Tent6.stageName}
              open={d1Tent1.open}
              isTimeStringViewLeft={true}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent1'}
              date={d1Tent7.date}
              data={d1Tent7.data}
              stageName={d1Tent7.stageName}
              open={d1Tent1.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent2'}
              date={d1Tent8.date}
              data={d1Tent8.data}
              stageName={d1Tent8.stageName}
              open={d1Tent1.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent1'}
              date={d1Tent9.date}
              data={d1Tent9.data}
              stageName={d1Tent9.stageName}
              open={d1Tent1.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent2'}
              date={d1Tent10.date}
              data={d1Tent10.data}
              stageName={d1Tent10.stageName}
              open={d1Tent1.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent1'}
              date={d1Tent11.date}
              data={d1Tent11.data}
              stageName={d1Tent11.stageName}
              open={d1Tent1.open}
              isTimeStringViewLeft={true}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent2'}
              date={d1Tent12.date}
              data={d1Tent12.data}
              stageName={d1Tent12.stageName}
              open={d1Tent1.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent1'}
              date={d1Tent13.date}
              data={d1Tent13.data}
              stageName={d1Tent13.stageName}
              open={d1Tent1.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent2'}
              date={d1Tent14.date}
              data={d1Tent14.data}
              stageName={d1Tent14.stageName}
              open={d1Tent1.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent1'}
              date={d1Tent15.date}
              data={d1Tent15.data}
              stageName={d1Tent15.stageName}
              open={d1Tent1.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent2'}
              date={d1Tent16.date}
              data={d1Tent16.data}
              stageName={d1Tent16.stageName}
              open={d1Tent1.open}
              isTimeStringViewLeft={true}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent1'}
              date={d1Tent17.date}
              data={d1Tent17.data}
              stageName={d1Tent17.stageName}
              open={d1Tent1.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent2'}
              date={d1Tent18.date}
              data={d1Tent18.data}
              stageName={d1Tent18.stageName}
              open={d1Tent1.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent1'}
              date={d1Tent19.date}
              data={d1Tent19.data}
              stageName={d1Tent19.stageName}
              open={d1Tent1.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent2'}
              date={d1Tent20.date}
              data={d1Tent20.data}
              stageName={d1Tent20.stageName}
              open={d1Tent1.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent1'}
              date={d1Tent21.date}
              data={d1Tent21.data}
              stageName={d1Tent21.stageName}
              open={d1Tent1.open}
              isTimeStringViewLeft={true}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent2'}
              date={d1Tent22.date}
              data={d1Tent22.data}
              stageName={d1Tent22.stageName}
              open={d1Tent1.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent1'}
              date={d1Tent23.date}
              data={d1Tent23.data}
              stageName={d1Tent23.stageName}
              open={d1Tent1.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent2'}
              date={d1Tent24.date}
              data={d1Tent24.data}
              stageName={d1Tent24.stageName}
              open={d1Tent1.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent1'}
              date={d1Tent25.date}
              data={d1Tent25.data}
              stageName={d1Tent25.stageName}
              open={d1Tent1.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent2'}
              date={d1Tent26.date}
              data={d1Tent26.data}
              stageName={d1Tent26.stageName}
              open={d1Tent1.open}
              isTimeStringViewLeft={true}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent1'}
              date={d1Tent27.date}
              data={d1Tent27.data}
              stageName={d1Tent27.stageName}
              open={d1Tent1.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent2'}
              date={d1Tent28.date}
              data={d1Tent28.data}
              stageName={d1Tent28.stageName}
              open={d1Tent1.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent1'}
              date={d1Tent29.date}
              data={d1Tent29.data}
              stageName={d1Tent29.stageName}
              open={d1Tent1.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={true}
            />
          </div>
        </div>

        <div className='target-area mt-10'>
          <div className='timetable-top'>
            <Img cName='logo' src='https://lime-light.tv/images/2025/app_logo.png' alt='logo' />
            <DateView year='2025' month='7' day='20' youbi='日' other='DAY2' />
            <Img cName='logo' src='https://lime-light.tv/images/2025/logo.png' alt='logo' />
          </div>
          <div className='timetable-area'>
            <TimeTable
              config={config}
              class={'tent1'}
              date={d2Tent1.date}
              data={d2Tent1.data}
              stageName={d2Tent1.stageName}
              open={d2Tent1.open}
              isTimeStringViewLeft={true}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent1'}
              date={d2Tent2.date}
              data={d2Tent2.data}
              stageName={d2Tent2.stageName}
              open={d2Tent1.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent1'}
              date={d2Tent3.date}
              data={d2Tent3.data}
              stageName={d2Tent3.stageName}
              open={d2Tent1.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent2'}
              date={d2Tent4.date}
              data={d2Tent4.data}
              stageName={d2Tent4.stageName}
              open={d2Tent1.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent1'}
              date={d2Tent5.date}
              data={d2Tent5.data}
              stageName={d2Tent5.stageName}
              open={d2Tent1.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent2'}
              date={d2Tent6.date}
              data={d2Tent6.data}
              stageName={d2Tent6.stageName}
              open={d2Tent1.open}
              isTimeStringViewLeft={true}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent1'}
              date={d2Tent7.date}
              data={d2Tent7.data}
              stageName={d2Tent7.stageName}
              open={d2Tent1.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent2'}
              date={d2Tent8.date}
              data={d2Tent8.data}
              stageName={d2Tent8.stageName}
              open={d2Tent1.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent1'}
              date={d2Tent9.date}
              data={d2Tent9.data}
              stageName={d2Tent9.stageName}
              open={d2Tent1.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent2'}
              date={d2Tent10.date}
              data={d2Tent10.data}
              stageName={d2Tent10.stageName}
              open={d2Tent1.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent1'}
              date={d2Tent11.date}
              data={d2Tent11.data}
              stageName={d2Tent11.stageName}
              open={d2Tent1.open}
              isTimeStringViewLeft={true}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent2'}
              date={d2Tent12.date}
              data={d2Tent12.data}
              stageName={d2Tent12.stageName}
              open={d2Tent1.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent1'}
              date={d2Tent13.date}
              data={d2Tent13.data}
              stageName={d2Tent13.stageName}
              open={d2Tent1.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent2'}
              date={d2Tent14.date}
              data={d2Tent14.data}
              stageName={d2Tent14.stageName}
              open={d2Tent1.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent1'}
              date={d2Tent15.date}
              data={d2Tent15.data}
              stageName={d2Tent15.stageName}
              open={d2Tent1.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent2'}
              date={d2Tent16.date}
              data={d2Tent16.data}
              stageName={d2Tent16.stageName}
              open={d2Tent1.open}
              isTimeStringViewLeft={true}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent1'}
              date={d2Tent17.date}
              data={d2Tent17.data}
              stageName={d2Tent17.stageName}
              open={d2Tent1.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent2'}
              date={d2Tent18.date}
              data={d2Tent18.data}
              stageName={d2Tent18.stageName}
              open={d2Tent1.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent1'}
              date={d2Tent19.date}
              data={d2Tent19.data}
              stageName={d2Tent19.stageName}
              open={d2Tent1.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent2'}
              date={d2Tent20.date}
              data={d2Tent20.data}
              stageName={d2Tent20.stageName}
              open={d2Tent1.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent1'}
              date={d2Tent21.date}
              data={d2Tent21.data}
              stageName={d2Tent21.stageName}
              open={d2Tent1.open}
              isTimeStringViewLeft={true}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent2'}
              date={d2Tent22.date}
              data={d2Tent22.data}
              stageName={d2Tent22.stageName}
              open={d2Tent1.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent1'}
              date={d2Tent23.date}
              data={d2Tent23.data}
              stageName={d2Tent23.stageName}
              open={d2Tent1.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent2'}
              date={d2Tent24.date}
              data={d2Tent24.data}
              stageName={d2Tent24.stageName}
              open={d2Tent1.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent1'}
              date={d2Tent25.date}
              data={d2Tent25.data}
              stageName={d2Tent25.stageName}
              open={d2Tent1.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent2'}
              date={d2Tent26.date}
              data={d2Tent26.data}
              stageName={d2Tent26.stageName}
              open={d2Tent1.open}
              isTimeStringViewLeft={true}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent1'}
              date={d2Tent27.date}
              data={d2Tent27.data}
              stageName={d2Tent27.stageName}
              open={d2Tent1.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent2'}
              date={d2Tent28.date}
              data={d2Tent28.data}
              stageName={d2Tent28.stageName}
              open={d2Tent1.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent1'}
              date={d2Tent29.date}
              data={d2Tent29.data}
              stageName={d2Tent29.stageName}
              open={d2Tent1.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={true}
            />
          </div>
        </div>

        <div className='target-area mt-10'>
          <div className='timetable-top'>
            <Img cName='logo' src='https://lime-light.tv/images/2025/app_logo.png' alt='logo' />
            <DateView year='2025' month='7' day='21' youbi='月祝' other='DAY3' />
            <Img cName='logo' src='https://lime-light.tv/images/2025/logo.png' alt='logo' />
          </div>
          <div className='timetable-area'>
            <TimeTable
              config={config}
              class={'tent1'}
              date={d3Tent1.date}
              data={d3Tent1.data}
              stageName={d3Tent1.stageName}
              open={d2Tent1.open}
              isTimeStringViewLeft={true}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent1'}
              date={d3Tent2.date}
              data={d3Tent2.data}
              stageName={d3Tent2.stageName}
              open={d2Tent1.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent1'}
              date={d3Tent3.date}
              data={d3Tent3.data}
              stageName={d3Tent3.stageName}
              open={d2Tent1.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent1'}
              date={d3Tent4.date}
              data={d3Tent4.data}
              stageName={d3Tent4.stageName}
              open={d2Tent1.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent1'}
              date={d3Tent5.date}
              data={d3Tent5.data}
              stageName={d3Tent5.stageName}
              open={d2Tent1.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent2'}
              date={d3Tent6.date}
              data={d3Tent6.data}
              stageName={d3Tent6.stageName}
              open={d2Tent1.open}
              isTimeStringViewLeft={true}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent1'}
              date={d3Tent7.date}
              data={d3Tent7.data}
              stageName={d3Tent7.stageName}
              open={d2Tent1.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent2'}
              date={d3Tent8.date}
              data={d3Tent8.data}
              stageName={d3Tent8.stageName}
              open={d2Tent1.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent1'}
              date={d3Tent9.date}
              data={d3Tent9.data}
              stageName={d3Tent9.stageName}
              open={d2Tent1.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent2'}
              date={d3Tent10.date}
              data={d3Tent10.data}
              stageName={d3Tent10.stageName}
              open={d2Tent1.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent1'}
              date={d3Tent11.date}
              data={d3Tent11.data}
              stageName={d3Tent11.stageName}
              open={d2Tent1.open}
              isTimeStringViewLeft={true}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent2'}
              date={d3Tent12.date}
              data={d3Tent12.data}
              stageName={d3Tent12.stageName}
              open={d2Tent1.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent1'}
              date={d3Tent13.date}
              data={d3Tent13.data}
              stageName={d3Tent13.stageName}
              open={d2Tent1.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent2'}
              date={d3Tent14.date}
              data={d3Tent14.data}
              stageName={d3Tent14.stageName}
              open={d2Tent1.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent1'}
              date={d3Tent15.date}
              data={d3Tent15.data}
              stageName={d3Tent15.stageName}
              open={d2Tent1.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent2'}
              date={d3Tent16.date}
              data={d3Tent16.data}
              stageName={d3Tent16.stageName}
              open={d2Tent1.open}
              isTimeStringViewLeft={true}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent1'}
              date={d3Tent17.date}
              data={d3Tent17.data}
              stageName={d3Tent17.stageName}
              open={d2Tent1.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent2'}
              date={d3Tent18.date}
              data={d3Tent18.data}
              stageName={d3Tent18.stageName}
              open={d2Tent1.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent1'}
              date={d3Tent19.date}
              data={d3Tent19.data}
              stageName={d3Tent19.stageName}
              open={d2Tent1.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent2'}
              date={d3Tent20.date}
              data={d3Tent20.data}
              stageName={d3Tent20.stageName}
              open={d2Tent1.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent1'}
              date={d3Tent21.date}
              data={d3Tent21.data}
              stageName={d3Tent21.stageName}
              open={d2Tent1.open}
              isTimeStringViewLeft={true}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent2'}
              date={d3Tent22.date}
              data={d3Tent22.data}
              stageName={d3Tent22.stageName}
              open={d2Tent1.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent1'}
              date={d3Tent23.date}
              data={d3Tent23.data}
              stageName={d3Tent23.stageName}
              open={d2Tent1.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent2'}
              date={d3Tent24.date}
              data={d3Tent24.data}
              stageName={d3Tent24.stageName}
              open={d2Tent1.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent1'}
              date={d3Tent25.date}
              data={d3Tent25.data}
              stageName={d3Tent25.stageName}
              open={d2Tent1.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent2'}
              date={d3Tent26.date}
              data={d3Tent26.data}
              stageName={d3Tent26.stageName}
              open={d2Tent1.open}
              isTimeStringViewLeft={true}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent1'}
              date={d3Tent27.date}
              data={d3Tent27.data}
              stageName={d3Tent27.stageName}
              open={d2Tent1.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent2'}
              date={d3Tent28.date}
              data={d3Tent28.data}
              stageName={d3Tent28.stageName}
              open={d2Tent1.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent1'}
              date={d3Tent29.date}
              data={d3Tent29.data}
              stageName={d3Tent29.stageName}
              open={d2Tent1.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={true}
            />
          </div>
        </div>
      </Container>
    </div>
  )
}

export const GreetingTable2025View = () => {
  return (
    <BaseView2025>
      <MainView />
    </BaseView2025>
  )
}
