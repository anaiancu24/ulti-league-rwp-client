import * as request from 'superagent'
import { baseUrl } from '../constants'

export const PLAYER_LOADED = 'PLAYER_LOADED'

const playerLoaded = (player) => ({
  type: PLAYER_LOADED,
  player
})

export const loadPlayer = (id) => (dispatch) => {
  request
    .get(`${baseUrl}/players/${id}`)
    .then(response => dispatch(playerLoaded(response.body.player)))
    .catch(err => console.error(err))
}