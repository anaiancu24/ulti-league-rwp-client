import * as request from 'superagent'
import { baseUrl } from '../constants'

export const TEAM_LOADED = 'TEAM_LOADED'

const teamLoaded = (team) => ({
  type: TEAM_LOADED,
  team
})

export const loadTeam = (id) => (dispatch) => {
  request
    .get(`${baseUrl}/teams/${id}`)
    .then(response => dispatch(teamLoaded(response.body.team)))
    .catch(err => console.error(err))
}