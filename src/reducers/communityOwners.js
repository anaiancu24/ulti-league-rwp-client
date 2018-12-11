import { COMMUNITY_OWNERS_LOADED } from '../actions/communityOwners'

export default function (state = null, {type, communityOwners}) {
  switch (type) {
    case COMMUNITY_OWNERS_LOADED:
      return communityOwners.reduce((communityOwners, communityOwner) => {
        communityOwners[communityOwner.id] = communityOwner
      return communityOwners
      }, {...state})
    default:
      return state
  }
}
