import React from 'react'
import ImgView from './imgView.tsx'
import { Clock, MapPin, CalendarBlank } from '@phosphor-icons/react'
import './eventCardView.scss'
import Link from 'next/link'

interface Event {
  eventId: number
  title: string
  placeName?: string
  date?: string
  openTime?: string
  startTime?: string
  imgUrl?: string
}

const ResizeFontSize = (text: string) => {
  const textLength = text.length
  if (textLength < 10) {
    return '1em'
  } else if (10 <= textLength && textLength < 20) {
    return '0.9em'
  } else {
    return '0.8em'
  }
}

export const EventCard = (props: Event) => {
  const { eventId, title, placeName, date, openTime, startTime, imgUrl } = props
  return (
    <Link href={`./event/${eventId}`} style={{ textDecoration: 'none' }}>
      <div className='event-card'>
        <ImgView imgUrl={imgUrl} width='30%' height='200px' backImg={imgUrl ?? ''} />
        <div className='detail-area'>
          <div className='event-title'>{title}</div>
          <div className='footer-area'>
            {date ? (
              <div className='event-date'>
                <CalendarBlank size={18} />
                {date}
              </div>
            ) : (
              ''
            )}
            {openTime && startTime ? (
              <div className='event-time'>
                <Clock size={18} />
                OPEN {openTime} / START {startTime}
              </div>
            ) : (
              ''
            )}
            {placeName ? (
              <div className='event-place' style={{ fontSize: ResizeFontSize(placeName) }}>
                <MapPin size={18} />
                {placeName}
              </div>
            ) : (
              ''
            )}
          </div>
        </div>
      </div>
    </Link>
  )
}
