import moment from 'moment'
import 'moment-duration-format'

export function formatPostDate (timestamp) {
  const date = makeDateObject(timestamp)
  return date.format('MMMM Do, YYYY')
}
export function formatPostTimestamp (timestamp) {
  const date = makeDateObject(timestamp)
  return date.format('YYYY-MM-DDTHH:mm:ss.SSSZ')
}
export function makeJSDate (timestamp) {
  const date = makeDateObjectFromInput(timestamp)
  return date.toDate()
}
function makeDateObjectFromInput (timestamp) {
  return moment(timestamp, 'YYYY-MM-DD')
}
export function formatDateForInput (timestamp) {
  const date = makeDateObject(timestamp)
  return date.format('YYYY-MM-DD')
}
function makeDateObject (timestamp) {
  return moment(timestamp, 'YYYY-MM-DDTHH:mm:ss.SSSZ')
}
export function secondsToTime (seconds) {
  return moment.duration(seconds, 'seconds').format('m:ss')
}

export function timeToSeconds (time) {
  const dateArray = time.split(':')
  return moment.duration({
    minutes: Number(dateArray[0]),
    seconds: Number(dateArray[1])
  }).asSeconds()
}

/*

YYYY-MM-DDTHH:mm:ss.SSSZ

*/
