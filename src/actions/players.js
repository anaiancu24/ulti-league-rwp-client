import * as request from 'superagent'
import { baseUrl } from '../constants'

export const PLAYER_LOADED = 'PLAYER_LOADED'
export const PLAYERS_LOADED = 'PLAYERS_LOADED'

const playerLoaded = (player) => ({
  type: PLAYER_LOADED,
  player
})

const playersLoaded = (players) => ({
  type: PLAYERS_LOADED,
  players
})

export const loadPlayer = (id) => (dispatch) => {
  request
    .get(`${baseUrl}/players/${id}`)
    .then(response => dispatch(playerLoaded(response.body.player)))
    .catch(err => console.error(err))
}

export const loadPlayers = () => (dispatch) => {
  request
    .get(`${baseUrl}/players`)
    .then(response => dispatch(playersLoaded(response.body.players)))
    .catch(err => console.error(err))
}