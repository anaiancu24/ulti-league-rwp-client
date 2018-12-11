

import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import TeamsOverview from './TeamsOverview';
import { loadTeams } from '../../actions/teams'


class TeamsOverviewContainer extends PureComponent {

  /* componentDidMount() {
    this.props.loadPlayer(Number(this.props.match.params.id))
  } */

  render() {
    return (
      <div className="teams-overview-container">
        <TeamsOverview />
      </div>
    )
  }
}

const mapStateToProps = state => ({

  authenticated: !!state.currentUser
})

const mapDispatchToProps = {
  loadTeams
}

export default connect(mapStateToProps, mapDispatchToProps)(TeamsOverviewContainer)
