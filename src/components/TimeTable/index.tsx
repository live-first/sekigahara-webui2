'use client'

import { useState } from 'react'
import './style.css'
import timeData from '../../resource/time.json'
import { TimeTableCellType } from '@/domain/timetable'

type StageType = {
  config: ConfigType
  date: string
  data: Array<TimeTableCellType>
  class?: string
  stageName: string
  isTimeStringViewLeft?: boolean
  isTimeStringViewRight?: boolean
  img?: string
  open: string
}

type ContentCellType = {
  data: TimeTableCellType
  date: string
  stage?: string
}

type ConfigType = {
  tableHeadCellHeight: number // テーブルヘッドの高さ
  tableCellHeight: number // テーブルセルの高さ
  contentMargin: number // コンテンツのmargin
  contentPadding: number // コンテンツのpadding
  borderBoldInterval: number // borderの太字間隔
  timeStringInterval: number // 左の時間軸の表示間隔
}

export const TimeTable = (props: StageType) => {
  const { config, isTimeStringViewLeft, isTimeStringViewRight, open, stageName, img } = props

  const ContentCell = (props: ContentCellType) => {
    const { data, date, stage } = props
    const [value, setValue] = useState(false)

    const classToggle = () => {
      setValue(!value)
    }

    const baseTime = Date.parse(`${date}T${timeData.baseTime}`)
    const endTime = Date.parse(`${data.endTime}`)
    const startTime = Date.parse(`${data.startTime}`)
    const cellCount = Math.abs(endTime - startTime) / 60 / 1000 / 5
    const ajustmentSize = config.contentMargin * 2 //margin
    const height = config.tableCellHeight * cellCount - ajustmentSize
    const topCount = Math.abs(startTime - baseTime) / 60 / 1000 / 5
    const top = config.tableHeadCellHeight + config.tableCellHeight * topCount
    return (
      <button
        className={`content-cell ${value ? 'active' : ''} ${stage}`}
        style={{
          height: `${height}px`,
          top: `${top}px`,
          padding: `${config.contentPadding}px`,
          margin: `${config.contentMargin}px`,
          width: `calc(100% - ${ajustmentSize}px)`,
        }}
        key={data.id}
        onClick={classToggle}
      >
        <div className='time-string'>
          {changeTimeStr(startTime)}〜{changeTimeStr(endTime)}
        </div>
        <div className='artist-name'>{data.artistName}</div>
      </button>
    )
  }

  const zeroPadding = (num: number) => {
    return `0${num}`.slice(-2)
  }
  const changeTimeStr = (dateTime: number) => {
    const date = new Date(dateTime)
    return `${zeroPadding(date.getHours())}:${zeroPadding(date.getMinutes())}`
  }
  return (
    <div
      className={`table-base inline-grid ${props.class}`}
      style={{
        marginLeft: `${isTimeStringViewLeft ? '50px' : ''}`,
        marginRight: `${isTimeStringViewRight ? '50px' : ''}`,
      }}
    >
      <div
        className={`table-head-cell ${props.class}`}
        style={{ height: `${config.tableHeadCellHeight}px` }}
      >
        {stageName && img === undefined && <span>{stageName}</span>}
        <div className='table-head-image'>
          {img && <img src={img} alt='' />}
          {open && <div className={`open ${props.class}`}>{open} OPEN</div>}
        </div>
      </div>
      {Object.values(timeData.data).map((time, index) => {
        const borderClass = index % config.borderBoldInterval === 0 ? 'border-bold' : 'border-nomal'
        return (
          <div
            className={`table-cell ${borderClass}`}
            style={{ height: `${config.tableCellHeight}px` }}
            key={time.id}
          >
            {index % config.timeStringInterval === 0 && isTimeStringViewLeft ? (
              <div className='time-left'>{time.time}</div>
            ) : (
              ''
            )}
            {index % config.timeStringInterval === 0 && isTimeStringViewRight ? (
              <div className='time-right'>{time.time}</div>
            ) : (
              ''
            )}
          </div>
        )
      })}
      {Object.values(props.data).map((data) => {
        return <ContentCell data={data} date={props.date} key={data.id} stage={props.class} />
      })}
    </div>
  )
}
