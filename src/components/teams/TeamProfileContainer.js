import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import TeamProfile from './TeamProfile';
import { loadTeam } from '../../actions/teams'


class TeamProfileContainer extends PureComponent {

  /* componentDidMount() {
    this.props.loadTeam(Number(this.props.match.params.id))
  } */

  render() {
    return (
      <div className="team-profile-container">
        <TeamProfile />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  /* team: state.team,
  teamId: state.team && state.team.id, */
  authenticated: !!state.currentUser
})

const mapDispatchToProps = {
  loadTeam
}

export default connect(mapStateToProps, mapDispatchToProps)(TeamProfileContainer)