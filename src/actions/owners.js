import * as request from 'superagent'
import { baseUrl } from '../constants'

export const OWNERS_LOADED = 'OWNERS_LOADED'
export const OWNER_LOADED = 'OWNER_LOADED'

const ownersLoaded = (owners) => ({
  type: OWNERS_LOADED,
  owners
})

const ownerLoaded = (owner) => ({
  type: OWNER_LOADED,
  owner
})

export const loadOwners = () => (dispatch) => {
  request
    .get(`${baseUrl}/owners`)
    .then(response => dispatch(ownersLoaded(response.body.owners)))
    .catch(err => console.error(err))
}

export const loadOwner = () => (dispatch, getState) => {
  const state = getState()
  const jwt = state.currentUser.jwt
  
  request
    .get(`${baseUrl}/owner/`)
    .set('Authorization', `Bearer ${jwt}`)
    .then(response => dispatch(ownerLoaded(response.body.owner)))
    .catch(err => console.error(err))
}

export const becomeOwner = (teamId, shares) => (dispatch, getState) => {
  const state = getState()
  const jwt = state.currentUser.jwt

  request
    .post(`${baseUrl}/owners`)
    .set('Authorization', `Bearer ${jwt}`)
    .send({ teamId, shares})
    .then(response => console.log(response.body))
    .catch(err => console.error(err))
}


export const updateOwner = (ownerId, shares) => (dispatch, getState) => {
  const state = getState()
  const jwt = state.currentUser.jwt

  request
    .patch(`${baseUrl}/owners/${ownerId}`)
    .set('Authorization', `Bearer ${jwt}`)
    .send({ shares })
    .then(response => console.log(response.body))
    .catch(err => console.error(err))

}


