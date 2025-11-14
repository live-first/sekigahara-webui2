export const EventCategory = {
  PHOTO: '0ifb1w7t4',
  INFINITY: 'q7guzyd40c',
  DIARY: 'wjje3amj2',
  SQUARE: 'x0i1hvtrc3sb',
  BOX: 'zglf148krqf',
  BOMB: 'bms66atbf',
} as const

export type EventCategory = (typeof EventCategory)[keyof typeof EventCategory]

export const eventCategoryToString = (key?: string) => {
  return key === EventCategory.PHOTO
    ? 'ガルボム撮影会'
    : key === EventCategory.INFINITY
    ? 'GIRLS INFINITY'
    : key === EventCategory.DIARY
    ? "Girl's Live Diary"
    : key === EventCategory.SQUARE
    ? 'GIRLS MUSIC SQUARE'
    : key === EventCategory.BOX
    ? 'GIRLS BOX'
    : key === EventCategory.BOMB
    ? "Girl's Bomb!!"
    : ''
}
