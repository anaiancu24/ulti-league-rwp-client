export const TEAMS_LOADED = 'TEAMS_LOADED'

const teamsLoaded = (teams) => ({
  type: TEAMS_LOADED,
  teams
})

export const loadTeams = () => (dispatch) => {
  request
    .get(`${baseUrl}/teams`)
    .then(response => dispatch(teamsLoaded(response.body.teams)))
    .catch(err => console.error(err))
}