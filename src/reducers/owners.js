import { OWNERS_LOADED, OWNER_LOADED } from '../actions/owners'

export default function (state = null, {type, payload}) {
  switch (type) {
    case OWNERS_LOADED:
      return payload.reduce((owners, owner) => {
        owners[owner.id] = owner
      return owners
      }, {...state})
    case OWNER_LOADED:
      return {...state, 
        [payload.id]: payload}
    default:
      return state
  }
}