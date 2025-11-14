// import { EventContentsType } from '@/domain/event'
// import { useEventsApi } from '@/api/eventsApi'
import { testEventData } from '@/data/testEventData'
import { EventCategory } from '@/domain/enum/EventCategory'

export const eventPresenter = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  // const { getEvents } = useEventsApi()
  // const events: EventContentsType[] = getEvents.data
  //   ? (getEvents.data.contents as unknown as EventContentsType[])
  //   : []

  const events = testEventData.contents

  /** Girl's Bomb!! */
  const bombEvents = events.filter((e) => e.categories.id === EventCategory.BOMB)
  /** GIRLS BOX */
  const boxEvents = events.filter((e) => e.categories.id === EventCategory.BOX)
  /** GIRLS MUSIC SQUARE */
  const squareEvents = events.filter((e) => e.categories.id === EventCategory.SQUARE)
  /** Girl's Live Diary */
  const daiaryEvents = events.filter((e) => e.categories.id === EventCategory.DIARY)
  /** GIRLS INFINITY */
  const infinityEvents = events.filter((e) => e.categories.id === EventCategory.INFINITY)
  /** ガルボム撮影会 */
  const photoEvents = events.filter((e) => e.categories.id === EventCategory.PHOTO)

  return {
    events,
    bombEvents,
    boxEvents,
    squareEvents,
    daiaryEvents,
    infinityEvents,
    photoEvents,
  }
}
