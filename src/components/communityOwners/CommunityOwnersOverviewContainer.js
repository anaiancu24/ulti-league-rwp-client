

import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import CommunityOwnersOverview from './CommunityOwnersOverview';
import { loadCommunityOwners } from '../../actions/communityOwners'


class CommunityOwnersOverviewContainer extends PureComponent {

  /* componentDidMount() {
    this.props.loadPlayer(Number(this.props.match.params.id))
  } */

  render() {
    return (
      <div className="cos-overview-container">
        <CommunityOwnersOverview />
      </div>
    )
  }
}

const mapStateToProps = state => ({

  authenticated: !!state.currentUser
})

const mapDispatchToProps = {
  loadCommunityOwners
}

export default connect(mapStateToProps, mapDispatchToProps)(CommunityOwnersOverviewContainer)
