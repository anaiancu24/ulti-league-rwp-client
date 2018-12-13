import { EVENTS_LOADED } from '../actions/events'

export default function (state = null, { type, events }) {
  switch (type) {
    case EVENTS_LOADED:
      return events.map(event => ({ ...event}))
    default:
      return state
  }
}