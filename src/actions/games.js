import * as request from 'superagent'
import { baseUrl } from '../constants'

export const GAMES_LOADED = 'GAMES_LOADED'
export const GAME_LOADED = 'GAME_LOADED'

const gamesLoaded = (games) => ({
  type: GAMES_LOADED,
  payload: games
})

const gameLoaded = (game) => ({
  type: GAME_LOADED,
  payload: game
})

export const loadGames = () => (dispatch) => {
  request
    .get(`${baseUrl}/games`)
    .then(response => {
      console.log(response)
      dispatch(gamesLoaded(response.body.games))
    })
    .catch(err => console.error(err))
}

export const loadGame = (id) => (dispatch) => {
  request
    .get(`${baseUrl}/games/${id}`)
    .then(response => dispatch(gameLoaded(response.body.game)))
    .catch(err => console.error(err))
}