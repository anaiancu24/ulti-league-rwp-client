

import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import TeamsOverview from './TeamsOverview';
import { loadTeams } from '../../actions/teams'


class TeamsOverviewContainer extends PureComponent {

  componentDidMount() {
    if (!this.props.teams) {
      this.props.loadTeams()
    }
  }

  render() {
    return (
      <div className="teams-overview-container">
        <TeamsOverview teams={this.props.teams} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  teams: state.teams && Object.values(state.teams),
  authenticated: !!state.currentUser
})

const mapDispatchToProps = {
  loadTeams
}

export default connect(mapStateToProps, mapDispatchToProps)(TeamsOverviewContainer)
