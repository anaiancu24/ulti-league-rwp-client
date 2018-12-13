import * as request from 'superagent'
import { baseUrl } from '../constants'

export const GAMES_LOADED = 'GAMES_LOADED'
export const GAME_LOADED = 'GAME_LOADED'

const gamesLoaded = (games) => ({
  type: GAMES_LOADED,
  games
})

const gameLoaded = (game) => ({
  type: GAME_LOADED,
  game
})

export const loadGames = () => (dispatch) => {
  request
    .get(`${baseUrl}/games`)
    .then(response => dispatch(gamesLoaded(response.body.games)))
    .catch(err => console.error(err))
}

export const loadGame = (id) => (dispatch) => {
  request
    .get(`${baseUrl}/games/${id}`)
    .then(response => dispatch(gameLoaded(response.body.game)))
    .catch(err => console.error(err))
}