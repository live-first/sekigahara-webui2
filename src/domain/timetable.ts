export type TimeTableCellType2 = {
  startMinutes: number
  endMinutes: number
} & TimeTableCellType

export type TimeTableCellType = {
  id: number | string
  startTime: string
  endTime: string
  artistName?: string | null
  photo?: boolean | null | string
}

export type TimeTableType = {
  date: string
  stageName: string
  open: string
  data: TimeTableCellType[]
}
