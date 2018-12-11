import { COMMUNITY_OWNERS_LOADED, COMMUNITY_OWNER_LOADED } from '../actions/communityOwners'

export default function (state = null, {type, communityOwners}) {
  switch (type) {
    case COMMUNITY_OWNERS_LOADED:
      return communityOwners.reduce((communityOwners, communityOwner) => {
        communityOwners[communityOwner.id] = communityOwner
      return communityOwners
      }, {...state})
    case COMMUNITY_OWNER_LOADED:
      return state
    default:
      return state
  }
}