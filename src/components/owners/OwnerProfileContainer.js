import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import OwnerProfile from './OwnerProfile';
import { loadOwner } from '../../actions/owners'

class OwnerProfileContainer extends PureComponent {

  /* componentDidMount() {
    this.props.loadCoach(Number(this.props.match.params.id))
  } */

  render() {
    return (
      <div className="owner-profile-container">
        <OwnerProfile />
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
  loadOwner
}

export default connect(mapStateToProps, mapDispatchToProps)(OwnerProfileContainer)