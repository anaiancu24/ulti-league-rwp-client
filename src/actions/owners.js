import * as request from 'superagent'
import { baseUrl } from '../constants'

export const OWNERS_LOADED = 'OWNERS_LOADED'
export const OWNER_LOADED = 'OWNER_LOADED'

const ownersLoaded = (owners) => ({
  type: OWNERS_LOADED,
  payload: owners
})

const communityOwnerLoaded = (owner) => ({
  type: OWNER_LOADED,
  payload: owner
})

export const loadOwners = () => (dispatch) => {
  request
    .get(`${baseUrl}/communityowners`)
    .then(response => dispatch(ownersLoaded(response.body.owners)))
    .catch(err => console.error(err))
}

export const loadOwner = (id) => (dispatch) => {
  request
    .get(`${baseUrl}/communityOwners/${id}`)
    .then(response => dispatch(communityOwnerLoaded(response.body.owner)))
    .catch(err => console.error(err))
}