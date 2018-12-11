export const COACHES_LOADED = 'COACHES_LOADED'

const coachesLoaded = (coaches) => ({
  type: COACHES_LOADED,
  coaches
})

export const loadCoaches = () => (dispatch) => {
  request
    .get(`${baseUrl}/coaches`)
    .then(response => dispatch(coachesLoaded(response.body.coaches)))
    .catch(err => console.error(err))
}