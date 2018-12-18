import * as request from 'superagent'
import { baseUrl } from '../constants'

export const PLAYER_SELECTED = 'PLAYER_SELECTED'
export const PLAYER_UNSELECTED = 'PLAYER_UNSELECTED'
export const SELECTION_CLEARED = 'SELECTION_CLEARED'

const playerSelected = (owner) => ({
  type: PLAYER_SELECTED,
  owner
})


const playerUnSelected = (owner) => ({
  type: PLAYER_SELECTED,
  owner
})

const selectionCleared = (owner) => ({
  type: SELECTION_CLEARED,
  owner
})





export const selectPlayer = (ownerId, playerId) => (dispatch, getState) => {
  const state = getState()
  const jwt = state.currentUser.jwt


  request
    .patch(`${baseUrl}/owners/${ownerId}/voteplayer`)
    .send({id: playerId})
    .set('Authorization', `Bearer ${jwt}`)
    .then(response => dispatch(playerSelected(response.body.owner)))
    .catch(err => console.error(err))
}


export const unSelectPlayer = (ownerId, playerId) => (dispatch, getState) => {
  const state = getState()
  const jwt = state.currentUser.jwt


  request
    .patch(`${baseUrl}/owners/${ownerId}/unvoteplayer`)
    .send({pId: playerId})
    .set('Authorization', `Bearer ${jwt}`)
    .then(response => dispatch(playerUnSelected(response.body.owner)))
    .catch(err => console.error(err))
}



export const clearSelection = (ownerId) => (dispatch, getState) => {
  const state = getState()
  const jwt = state.currentUser.jwt


  request
    .patch(`${baseUrl}/owners/${ownerId}/clearselection`)
    .set('Authorization', `Bearer ${jwt}`)
    .then(response => dispatch(selectionCleared(response.body.owner)))
    .catch(err => console.error(err))
}