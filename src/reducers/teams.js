import { TEAMS_LOADED, TEAM_LOADED } from '../actions/teams'

export default function (state = null, { type, payload }) {
  switch (type) {
    case TEAMS_LOADED:
      return payload.reduce((teams, team) => {
        teams[team.id] = team
        return teams
      }, { ...state })
    case TEAM_LOADED:
      return {
        ...state,
        [payload.id]: payload
      }
    default:
      return state
  }
}

