export const COMMUNITY_OWNERS_LOADED = 'COMMUNITY_OWNERS_LOADED'

const communityOwnersLoaded = (communityOwners) => ({
  type: COMMUNITY_OWNERS_LOADED,
  communityOwners
})

export const loadCommunityOwners = () => (dispatch) => {
  request
    .get(`${baseUrl}/communityowners`)
    .then(response => dispatch(communityOwnersLoaded(response.body.communityOwners)))
    .catch(err => console.error(err))
}