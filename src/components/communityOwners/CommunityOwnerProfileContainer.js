import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import CommunityOwnerProfile from './CommunityOwnerProfile';
import { loadCommunityOwner } from '../../actions/communityOwners'

class CommunityOwnerProfileContainer extends PureComponent {

  /* componentDidMount() {
    this.props.loadCoach(Number(this.props.match.params.id))
  } */

  render() {
    return (
      <div className="co-profile-container">
        <CommunityOwnerProfile />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  /* communityOwner: state.communityOwner,
  communityOwnerId: state.communityOwner && state.communityOwner.id, */
  authenticated: !!state.currentUser
})

const mapDispatchToProps = {
  loadCommunityOwner
}

export default connect(mapStateToProps, mapDispatchToProps)(CommunityOwnerProfileContainer)