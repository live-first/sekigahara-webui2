import { EventContentsType } from '@/domain/event'
import { useEventsApi } from '@/api/eventsApi'

export const eventPresenter = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { getEvents } = useEventsApi()
  const events: EventContentsType[] = getEvents.data
    ? (getEvents.data.contents as unknown as EventContentsType[])
    : []

  return {
    events,
  }
}
