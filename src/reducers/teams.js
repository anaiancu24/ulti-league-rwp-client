import { TEAMS_LOADED } from '../actions/teams'

export default function (state = null, {type, teams}) {
  switch (type) {
    case TEAMS_LOADED:
      return teams.reduce((teams, team) => {
      teams[team.id] = team
      return teams
      }, {...state})
    default:
      return state
  }
}