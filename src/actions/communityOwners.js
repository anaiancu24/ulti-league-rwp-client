import * as request from 'superagent'
import { baseUrl } from '../constants'

export const COMMUNITY_OWNERS_LOADED = 'COMMUNITY_OWNERS_LOADED'
export const COMMUNITY_OWNER_LOADED = 'COMMUNITY_OWNER_LOADED'

const communityOwnersLoaded = (communityOwners) => ({
  type: COMMUNITY_OWNERS_LOADED,
  communityOwners
})

const communityOwnerLoaded = (communityOwner) => ({
  type: COMMUNITY_OWNER_LOADED,
  communityOwner
})

export const loadCommunityOwners = () => (dispatch) => {
  request
    .get(`${baseUrl}/communityowners`)
    .then(response => dispatch(communityOwnersLoaded(response.body.communityOwners)))
    .catch(err => console.error(err))
}

export const loadCommunityOwner = (id) => (dispatch) => {
  request
    .get(`${baseUrl}/communityOwners/${id}`)
    .then(response => dispatch(communityOwnerLoaded(response.body.communityOwner)))
    .catch(err => console.error(err))
}