import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
dayjs.extend(utc)

export const getYMD = (date: string) =>
  dayjs(date).format('YYYY-MM-DD')

export const getYMDHMS = (date: string) =>
  dayjs.utc(date).format('YYYY-MM-DD HH:mm:ss')