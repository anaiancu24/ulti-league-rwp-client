import * as request from 'superagent'
import { baseUrl } from '../constants'

export const EVENTS_LOADED = 'EVENTS_LOADED'
export const EVENT_LOADED = 'EVENT_LOADED'

const eventsLoaded = (events) => ({
  type: EVENTS_LOADED,
  payload: events
})

const eventLoaded = (event) => ({
  type: EVENT_LOADED,
  payload: event
})

export const loadEvents = () => (dispatch) => {
  request
    .get(`${baseUrl}/events`)
    .then(response => {
      console.log(response)
      dispatch(eventsLoaded(response.body.events))
    })
    .catch(err => console.error(err))
}

export const loadEvent = (id) => (dispatch) => {
  request
    .get(`${baseUrl}/events/${id}`)
    .then(response => dispatch(eventLoaded(response.body.event)))
    .catch(err => console.error(err))
}