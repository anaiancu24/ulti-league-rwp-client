import { TEAMS_LOADED } from '../actions/teams'

export default function (state = null, { type, teams }) {
  switch (type) {
    case TEAMS_LOADED:
      return teams.map(team => ({ ...team }))
    default:
      return state
  }
}

