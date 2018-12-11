import { COMMUNITY_OWNERS_LOADED, COMMUNITY_OWNER_LOADED } from '../actions/communityOwners'

export default function (state = null, {type, payload}) {
  switch (type) {
    case COMMUNITY_OWNERS_LOADED:
      return payload.reduce((communityOwners, communityOwner) => {
        communityOwners[communityOwner.id] = communityOwner
      return communityOwners
      }, {...state})
    case COMMUNITY_OWNER_LOADED:
      return {...state, 
        [payload.id]: payload}
    default:
      return state
  }
}