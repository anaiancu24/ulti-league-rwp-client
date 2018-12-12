import { EVENTS_LOADED, EVENT_LOADED } from '../actions/events'

export default function (state = null, {type, payload}) {
  switch (type) {
    case EVENTS_LOADED:
      return payload.reduce((events, event) => {
      events[event.id] = event
      return events
      }, {...state})
    case EVENT_LOADED:
      return {...state, 
        [payload.id]: payload
      }
    default:
      return state
  }
}