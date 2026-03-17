'use client'

import React from 'react'
import { Container } from '@mui/material'
import './timetable.scss'
import tent1 from './greeting/day1/tent1.json'
import tent2 from './greeting/day1/tent2.json'
import tent3 from './greeting/day1/tent3.json'
import tent4 from './greeting/day1/tent4.json'
import tent5 from './greeting/day1/tent5.json'
import tent6 from './greeting/day1/tent6.json'
import tent7 from './greeting/day1/tent7.json'
import tent8 from './greeting/day1/tent8.json'
import tent9 from './greeting/day1/tent9.json'
import tent10 from './greeting/day1/tent10.json'
import tent11 from './greeting/day1/tent11.json'
import tent12 from './greeting/day1/tent12.json'
import tent13 from './greeting/day1/tent13.json'
import tent14 from './greeting/day1/tent14.json'
import tent15 from './greeting/day1/tent15.json'
import tent16 from './greeting/day1/tent16.json'
import tent17 from './greeting/day1/tent17.json'
import tent18 from './greeting/day1/tent18.json'
import tent19 from './greeting/day1/tent19.json'
import tent20 from './greeting/day1/tent20.json'
import tent21 from './greeting/day1/tent21.json'
import tent22 from './greeting/day1/tent22.json'
import tent23 from './greeting/day1/tent23.json'
import tent24 from './greeting/day1/tent24.json'
import tent25 from './greeting/day1/tent25.json'
import tent26 from './greeting/day1/tent26.json'
import tent27 from './greeting/day1/tent27.json'
import tent28 from './greeting/day1/tent28.json'

import d2tent1 from './greeting/day2/tent1.json'
import d2tent2 from './greeting/day2/tent2.json'
import d2tent3 from './greeting/day2/tent3.json'
import d2tent4 from './greeting/day2/tent4.json'
import d2tent5 from './greeting/day2/tent5.json'
import d2tent6 from './greeting/day2/tent6.json'
import d2tent7 from './greeting/day2/tent7.json'
import d2tent8 from './greeting/day2/tent8.json'
import d2tent9 from './greeting/day2/tent9.json'
import d2tent10 from './greeting/day2/tent10.json'
import d2tent11 from './greeting/day2/tent11.json'
import d2tent12 from './greeting/day2/tent12.json'
import d2tent13 from './greeting/day2/tent13.json'
import d2tent14 from './greeting/day2/tent14.json'
import d2tent15 from './greeting/day2/tent15.json'
import d2tent16 from './greeting/day2/tent16.json'
import d2tent17 from './greeting/day2/tent17.json'
import d2tent18 from './greeting/day2/tent18.json'
import d2tent19 from './greeting/day2/tent19.json'
import d2tent20 from './greeting/day2/tent20.json'
import d2tent21 from './greeting/day2/tent21.json'
import d2tent22 from './greeting/day2/tent22.json'
import d2tent23 from './greeting/day2/tent23.json'
import d2tent24 from './greeting/day2/tent24.json'
import d2tent25 from './greeting/day2/tent25.json'
import d2tent26 from './greeting/day2/tent26.json'
import d2tent27 from './greeting/day2/tent27.json'
import d2tent28 from './greeting/day2/tent28.json'

import d3tent1 from './greeting/day3/tent1.json'
import d3tent2 from './greeting/day3/tent2.json'
import d3tent3 from './greeting/day3/tent3.json'
import d3tent4 from './greeting/day3/tent4.json'
import d3tent5 from './greeting/day3/tent5.json'
import d3tent6 from './greeting/day3/tent6.json'
import d3tent7 from './greeting/day3/tent7.json'
import d3tent8 from './greeting/day3/tent8.json'
import d3tent9 from './greeting/day3/tent9.json'
import d3tent10 from './greeting/day3/tent10.json'
import d3tent11 from './greeting/day3/tent11.json'
import d3tent12 from './greeting/day3/tent12.json'
import d3tent13 from './greeting/day3/tent13.json'
import d3tent14 from './greeting/day3/tent14.json'
import d3tent15 from './greeting/day3/tent15.json'
import d3tent16 from './greeting/day3/tent16.json'
import d3tent17 from './greeting/day3/tent17.json'
import d3tent18 from './greeting/day3/tent18.json'
import d3tent19 from './greeting/day3/tent19.json'
import d3tent20 from './greeting/day3/tent20.json'
import d3tent21 from './greeting/day3/tent21.json'
import d3tent22 from './greeting/day3/tent22.json'
import d3tent23 from './greeting/day3/tent23.json'
import d3tent24 from './greeting/day3/tent24.json'
import d3tent25 from './greeting/day3/tent25.json'
import d3tent26 from './greeting/day3/tent26.json'
import d3tent27 from './greeting/day3/tent27.json'
import d3tent28 from './greeting/day3/tent28.json'
import { Title } from '@/components/title/title'
import { Img } from '@/components/Image'
import { TimeTable } from '@/components/TimeTable'
import { BaseViewLayout } from '@/layouts/BaseViewLayout'

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
    <div className='timetable'>
      <Container maxWidth='lg'>
        <Title english='GREETING' japaniese='物販・特典会情報' />
        <div className='target-area mt-10'>
          <div className='timetable-top'>
            <Img
              cName='logo'
              src='https://sekigahara-idolwars.net/images/2024/logo_10th.png'
              alt='logo'
            />
            <DateView year='2024' month='7' day='19' youbi='金' other='DAY1' />
            <Img
              cName='logo'
              src='https://sekigahara-idolwars.net/images/2024/logo_black.png'
              alt='logo'
            />
          </div>
          <div className='timetable-area'>
            <TimeTable
              config={config}
              class={'tent1'}
              date={tent1.date}
              data={tent1.data}
              stageName={tent1.stageName}
              open={tent1.open}
              isTimeStringViewLeft={true}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent2'}
              date={tent2.date}
              data={tent2.data}
              stageName={tent2.stageName}
              open={tent1.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent1'}
              date={tent3.date}
              data={tent3.data}
              stageName={tent3.stageName}
              open={tent1.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent2'}
              date={tent4.date}
              data={tent4.data}
              stageName={tent4.stageName}
              open={tent1.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent1'}
              date={tent5.date}
              data={tent5.data}
              stageName={tent5.stageName}
              open={tent1.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent2'}
              date={tent6.date}
              data={tent6.data}
              stageName={tent6.stageName}
              open={tent1.open}
              isTimeStringViewLeft={true}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent1'}
              date={tent7.date}
              data={tent7.data}
              stageName={tent7.stageName}
              open={tent1.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent2'}
              date={tent8.date}
              data={tent8.data}
              stageName={tent8.stageName}
              open={tent1.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent1'}
              date={tent9.date}
              data={tent9.data}
              stageName={tent9.stageName}
              open={tent1.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent2'}
              date={tent10.date}
              data={tent10.data}
              stageName={tent10.stageName}
              open={tent1.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent1'}
              date={tent11.date}
              data={tent11.data}
              stageName={tent11.stageName}
              open={tent1.open}
              isTimeStringViewLeft={true}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent2'}
              date={tent12.date}
              data={tent12.data}
              stageName={tent12.stageName}
              open={tent1.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent1'}
              date={tent13.date}
              data={tent13.data}
              stageName={tent13.stageName}
              open={tent1.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent2'}
              date={tent14.date}
              data={tent14.data}
              stageName={tent14.stageName}
              open={tent1.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent1'}
              date={tent15.date}
              data={tent15.data}
              stageName={tent15.stageName}
              open={tent1.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent2'}
              date={tent16.date}
              data={tent16.data}
              stageName={tent16.stageName}
              open={tent1.open}
              isTimeStringViewLeft={true}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent1'}
              date={tent17.date}
              data={tent17.data}
              stageName={tent17.stageName}
              open={tent1.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent2'}
              date={tent18.date}
              data={tent18.data}
              stageName={tent18.stageName}
              open={tent1.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent1'}
              date={tent19.date}
              data={tent19.data}
              stageName={tent19.stageName}
              open={tent1.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent2'}
              date={tent20.date}
              data={tent20.data}
              stageName={tent20.stageName}
              open={tent1.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent1'}
              date={tent21.date}
              data={tent21.data}
              stageName={tent21.stageName}
              open={tent1.open}
              isTimeStringViewLeft={true}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent2'}
              date={tent22.date}
              data={tent22.data}
              stageName={tent22.stageName}
              open={tent1.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent1'}
              date={tent23.date}
              data={tent23.data}
              stageName={tent23.stageName}
              open={tent1.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent2'}
              date={tent24.date}
              data={tent24.data}
              stageName={tent24.stageName}
              open={tent1.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent1'}
              date={tent25.date}
              data={tent25.data}
              stageName={tent25.stageName}
              open={tent1.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent2'}
              date={tent26.date}
              data={tent26.data}
              stageName={tent26.stageName}
              open={tent1.open}
              isTimeStringViewLeft={true}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent1'}
              date={tent27.date}
              data={tent27.data}
              stageName={tent27.stageName}
              open={tent1.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent2'}
              date={tent28.date}
              data={tent28.data}
              stageName={tent28.stageName}
              open={tent1.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={true}
            />
          </div>
        </div>

        <div className='target-area mt-10'>
          <div className='timetable-top'>
            <Img
              cName='logo'
              src='https://sekigahara-idolwars.net/images/2024/logo_10th.png'
              alt='logo'
            />
            <DateView year='2024' month='7' day='20' youbi='土' other='DAY2' />
            <Img
              cName='logo'
              src='https://sekigahara-idolwars.net/images/2024/logo_black.png'
              alt='logo'
            />
          </div>
          <div className='timetable-area'>
            <TimeTable
              config={config}
              class={'tent1'}
              date={d2tent1.date}
              data={d2tent1.data}
              stageName={d2tent1.stageName}
              open={tent1.open}
              isTimeStringViewLeft={true}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent2'}
              date={d2tent2.date}
              data={d2tent2.data}
              stageName={d2tent2.stageName}
              open={tent1.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent1'}
              date={d2tent3.date}
              data={d2tent3.data}
              stageName={d2tent3.stageName}
              open={tent1.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent2'}
              date={d2tent4.date}
              data={d2tent4.data}
              stageName={d2tent4.stageName}
              open={tent1.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent1'}
              date={d2tent5.date}
              data={d2tent5.data}
              stageName={d2tent5.stageName}
              open={tent1.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent2'}
              date={d2tent6.date}
              data={d2tent6.data}
              stageName={d2tent6.stageName}
              open={tent1.open}
              isTimeStringViewLeft={true}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent1'}
              date={d2tent7.date}
              data={d2tent7.data}
              stageName={d2tent7.stageName}
              open={tent1.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent2'}
              date={d2tent8.date}
              data={d2tent8.data}
              stageName={d2tent8.stageName}
              open={tent1.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent1'}
              date={d2tent9.date}
              data={d2tent9.data}
              stageName={d2tent9.stageName}
              open={tent1.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent2'}
              date={d2tent10.date}
              data={d2tent10.data}
              stageName={d2tent10.stageName}
              open={tent1.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent1'}
              date={d2tent11.date}
              data={d2tent11.data}
              stageName={d2tent11.stageName}
              open={tent1.open}
              isTimeStringViewLeft={true}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent2'}
              date={d2tent12.date}
              data={d2tent12.data}
              stageName={d2tent12.stageName}
              open={tent1.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent1'}
              date={d2tent13.date}
              data={d2tent13.data}
              stageName={d2tent13.stageName}
              open={tent1.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent2'}
              date={d2tent14.date}
              data={d2tent14.data}
              stageName={d2tent14.stageName}
              open={tent1.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent1'}
              date={d2tent15.date}
              data={d2tent15.data}
              stageName={d2tent15.stageName}
              open={tent1.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent2'}
              date={d2tent16.date}
              data={d2tent16.data}
              stageName={d2tent16.stageName}
              open={tent1.open}
              isTimeStringViewLeft={true}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent1'}
              date={d2tent17.date}
              data={d2tent17.data}
              stageName={d2tent17.stageName}
              open={tent1.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent2'}
              date={d2tent18.date}
              data={d2tent18.data}
              stageName={d2tent18.stageName}
              open={tent1.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent1'}
              date={d2tent19.date}
              data={d2tent19.data}
              stageName={d2tent19.stageName}
              open={tent1.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent2'}
              date={d2tent20.date}
              data={d2tent20.data}
              stageName={d2tent20.stageName}
              open={tent1.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent1'}
              date={d2tent21.date}
              data={d2tent21.data}
              stageName={d2tent21.stageName}
              open={tent1.open}
              isTimeStringViewLeft={true}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent2'}
              date={d2tent22.date}
              data={d2tent22.data}
              stageName={d2tent22.stageName}
              open={tent1.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent1'}
              date={d2tent23.date}
              data={d2tent23.data}
              stageName={d2tent23.stageName}
              open={tent1.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent2'}
              date={d2tent24.date}
              data={d2tent24.data}
              stageName={d2tent24.stageName}
              open={tent1.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent1'}
              date={d2tent25.date}
              data={d2tent25.data}
              stageName={d2tent25.stageName}
              open={tent1.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent2'}
              date={d2tent26.date}
              data={d2tent26.data}
              stageName={d2tent26.stageName}
              open={tent1.open}
              isTimeStringViewLeft={true}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent1'}
              date={d2tent27.date}
              data={d2tent27.data}
              stageName={d2tent27.stageName}
              open={tent1.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent2'}
              date={d2tent28.date}
              data={d2tent28.data}
              stageName={d2tent28.stageName}
              open={tent1.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={true}
            />
          </div>
        </div>

        <div className='target-area mt-10'>
          <div className='timetable-top'>
            <Img
              cName='logo'
              src='https://sekigahara-idolwars.net/images/2024/logo_10th.png'
              alt='logo'
            />
            <DateView year='2024' month='7' day='21' youbi='日' other='DAY3' />
            <Img
              cName='logo'
              src='https://sekigahara-idolwars.net/images/2024/logo_black.png'
              alt='logo'
            />
          </div>
          <div className='timetable-area'>
            <TimeTable
              config={config}
              class={'tent1'}
              date={d3tent1.date}
              data={d3tent1.data}
              stageName={d3tent1.stageName}
              open={tent1.open}
              isTimeStringViewLeft={true}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent2'}
              date={d3tent2.date}
              data={d3tent2.data}
              stageName={d3tent2.stageName}
              open={tent1.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent1'}
              date={d3tent3.date}
              data={d3tent3.data}
              stageName={d3tent3.stageName}
              open={tent1.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent2'}
              date={d3tent4.date}
              data={d3tent4.data}
              stageName={d3tent4.stageName}
              open={tent1.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent1'}
              date={d3tent5.date}
              data={d3tent5.data}
              stageName={d3tent5.stageName}
              open={tent1.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent2'}
              date={d3tent6.date}
              data={d3tent6.data}
              stageName={d3tent6.stageName}
              open={tent1.open}
              isTimeStringViewLeft={true}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent1'}
              date={d3tent7.date}
              data={d3tent7.data}
              stageName={d3tent7.stageName}
              open={tent1.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent2'}
              date={d3tent8.date}
              data={d3tent8.data}
              stageName={d3tent8.stageName}
              open={tent1.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent1'}
              date={d3tent9.date}
              data={d3tent9.data}
              stageName={d3tent9.stageName}
              open={tent1.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent2'}
              date={d3tent10.date}
              data={d3tent10.data}
              stageName={d3tent10.stageName}
              open={tent1.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent1'}
              date={d3tent11.date}
              data={d3tent11.data}
              stageName={d3tent11.stageName}
              open={tent1.open}
              isTimeStringViewLeft={true}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent2'}
              date={d3tent12.date}
              data={d3tent12.data}
              stageName={d3tent12.stageName}
              open={tent1.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent1'}
              date={d3tent13.date}
              data={d3tent13.data}
              stageName={d3tent13.stageName}
              open={tent1.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent2'}
              date={d3tent14.date}
              data={d3tent14.data}
              stageName={d3tent14.stageName}
              open={tent1.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent1'}
              date={d3tent15.date}
              data={d3tent15.data}
              stageName={d3tent15.stageName}
              open={tent1.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent2'}
              date={d3tent16.date}
              data={d3tent16.data}
              stageName={d3tent16.stageName}
              open={tent1.open}
              isTimeStringViewLeft={true}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent1'}
              date={d3tent17.date}
              data={d3tent17.data}
              stageName={d3tent17.stageName}
              open={tent1.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent2'}
              date={d3tent18.date}
              data={d3tent18.data}
              stageName={d3tent18.stageName}
              open={tent1.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent1'}
              date={d3tent19.date}
              data={d3tent19.data}
              stageName={d3tent19.stageName}
              open={tent1.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent2'}
              date={d3tent20.date}
              data={d3tent20.data}
              stageName={d3tent20.stageName}
              open={tent1.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent1'}
              date={d3tent21.date}
              data={d3tent21.data}
              stageName={d3tent21.stageName}
              open={tent1.open}
              isTimeStringViewLeft={true}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent2'}
              date={d3tent22.date}
              data={d3tent22.data}
              stageName={d3tent22.stageName}
              open={tent1.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent1'}
              date={d3tent23.date}
              data={d3tent23.data}
              stageName={d3tent23.stageName}
              open={tent1.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent2'}
              date={d3tent24.date}
              data={d3tent24.data}
              stageName={d3tent24.stageName}
              open={tent1.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent1'}
              date={d3tent25.date}
              data={d3tent25.data}
              stageName={d3tent25.stageName}
              open={tent1.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent2'}
              date={d3tent26.date}
              data={d3tent26.data}
              stageName={d3tent26.stageName}
              open={tent1.open}
              isTimeStringViewLeft={true}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent1'}
              date={d3tent27.date}
              data={d3tent27.data}
              stageName={d3tent27.stageName}
              open={tent1.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={false}
            />
            <TimeTable
              config={config}
              class={'tent2'}
              date={d3tent28.date}
              data={d3tent28.data}
              stageName={d3tent28.stageName}
              open={tent1.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={true}
            />
          </div>
        </div>
      </Container>
    </div>
  )
}

const GreetingTable2024View = () => {
  return <BaseViewLayout main={<MainView />} />
}

export default GreetingTable2024View
