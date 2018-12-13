import { OWNERS_LOADED } from '../actions/owners'

export default function (state = null, { type, owners }) {
  switch (type) {
    case OWNERS_LOADED:
      return owners.map(owner => ({ ...owner }))
    default:
      return state
  }
}