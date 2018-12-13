import * as request from 'superagent'
import { baseUrl } from '../constants'

export const TEAMS_LOADED = 'TEAMS_LOADED'
export const TEAM_LOADED = 'TEAM_LOADED'

const teamsLoaded = (teams) => ({
  type: TEAMS_LOADED,
  teams
})

const teamLoaded = (team) => ({
  type: TEAM_LOADED,
  team
})

export const loadTeams = () => (dispatch) => {
  request
    .get(`${baseUrl}/teams`)
    .then(response => dispatch(teamsLoaded(response.body.teams)))
    .catch(err => console.error(err))
}

export const loadTeam = (id) => (dispatch) => {
  request
    .get(`${baseUrl}/teams/${id}`)
    .then(response => dispatch(teamLoaded(response.body.team)))
    .catch(err => console.error(err))
}