let eventGuid = 0
let todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today

export const INITIAL_EVENTS = [
  {
    id: createEventId(),
    title: 'BreakFast',
    start: todayStr + 'T07:00:00'
  },
  {
    id: createEventId(),
    title: 'Soccer',
    start: todayStr + 'T11:00:00'
  },
  {
    id: createEventId(),
    title: 'TV',
    start: todayStr + 'T13:00:00'
  },
  {
    id: createEventId(),
    title: 'Lunch',
    start: todayStr + 'T12:00:00'
  }
]

export function createEventId() {
  return String(eventGuid++)
}