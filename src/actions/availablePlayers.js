import * as request from 'superagent'
import { baseUrl } from '../constants'

export const AVAILABLE_PLAYERS_LOADED = 'AVAILABLE_PLAYERS_LOADED'


const availablePlayersLoaded = (availablePlayers) => ({
  type: AVAILABLE_PLAYERS_LOADED,
  availablePlayers
})



export const loadAvailablePlayersForOwner = (ownerId) => (dispatch) => {
  request
    .get(`${baseUrl}/loadavailableplayersforowner/${ownerId}`)
    .then(response => dispatch(availablePlayersLoaded(response.body.availablePlayers)))
    .catch(err => console.error(err))
}