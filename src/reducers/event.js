import { EVENT_LOADED } from '../actions/events'

export default function (state = null, { type, event }) {
  switch (type) {
    case EVENT_LOADED:
      return { ...event }
    default:
      return state
  }
}