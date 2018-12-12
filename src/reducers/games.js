import { GAMES_LOADED, GAME_LOADED } from '../actions/games'

export default function (state = null, {type, payload}) {
  switch (type) {
    case GAMES_LOADED:
      return payload.reduce((games, game) => {
      games[game.id] = game
      return games
      }, {...state})
    case GAME_LOADED:
      return {...state, 
        [payload.id]: payload
      }
    default:
      return state
  }
}