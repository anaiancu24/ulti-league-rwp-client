import { COMMUNITY_OWNER_LOADED } from '../actions/communityOwners'

export default function (state = null, { type, communityOwner }) {
  switch (type) {
    case COMMUNITY_OWNER_LOADED:
      return { ...communityOwner }
    default:
      return state
  }
}