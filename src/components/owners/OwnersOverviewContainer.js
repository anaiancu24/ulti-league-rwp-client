

import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import OwnersOverview from './OwnersOverview';
import { loadOwners } from '../../actions/owners';


class OwnersOverviewContainer extends PureComponent {

  componentDidMount() {
    this.props.loadOwners()
  }

  render() {
    return (
      <div className="owners-overview-container">
        <OwnersOverview />
      </div>
    )
  }
}

const mapStateToProps = state => ({

  authenticated: !!state.currentUser
})

const mapDispatchToProps = {
  loadOwners
}

export default connect(mapStateToProps, mapDispatchToProps)(OwnersOverviewContainer)
