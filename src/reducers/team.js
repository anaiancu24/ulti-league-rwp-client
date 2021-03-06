import { TEAM_LOADED } from '../actions/teams'

export default function (state = null, { type, team }) {
  switch (type) {
    case TEAM_LOADED:
      return { ...team }
    default:
      return state
  }
}
