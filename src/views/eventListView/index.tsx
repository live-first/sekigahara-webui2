'use client'

import { useEventsApi } from '@/api/eventsApi'
import { Heading } from '@/components/Heading'
import { EventContentsType } from '@/domain/event'
import { Container } from '@mui/material'

export const EventListView = () => {
  const { getEvents } = useEventsApi()

  const events: EventContentsType[] = getEvents.data
    ? (getEvents.data.contents as unknown as EventContentsType[])
    : []
  return (
    <div className='flex flex-col gap-12 pt-8 justify-center items-center pb-40 px-1 md:px-6 bg-black'>
      <Heading tag={2} label='EVENTS' />
      <Container maxWidth='md'></Container>
    </div>
  )
}
