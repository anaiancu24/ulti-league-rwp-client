import * as request from 'superagent'
import { baseUrl } from '../constants'

export const COMMUNITY_OWNER_LOADED = 'COMMUNITY_OWNER_LOADED'

const communityOwnerLoaded = (communityOwner) => ({
  type: COMMUNITY_OWNER_LOADED,
  communityOwner
})

export const loadCommunityOwners = (id) => (dispatch) => {
  request
    .get(`${baseUrl}/communityOwners/${id}`)
    .then(response => dispatch(communityOwnerLoaded(response.body.communityOwner)))
    .catch(err => console.error(err))
}