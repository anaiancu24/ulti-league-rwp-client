

import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import CoachesOverview from './CoachesOverview';
import { loadCoaches } from '../../actions/coaches'


class CoachesOverviewContainer extends PureComponent {

  componentDidMount() {
    this.props.loadCoaches()
  }

  render() {
    return (
      <div className="coaches-overview-container">
        <CoachesOverview />
      </div>
    )
  }
}

const mapStateToProps = state => ({

  authenticated: !!state.currentUser
})

const mapDispatchToProps = {
  loadCoaches
}

export default connect(mapStateToProps, mapDispatchToProps)(CoachesOverviewContainer)
