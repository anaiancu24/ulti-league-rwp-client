import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import TeamProfile from './TeamProfile';
import { loadTeam } from '../../actions/teams'


class TeamProfileContainer extends PureComponent {

  componentDidMount() {
    if (!this.props.team) {
      this.props.loadTeam(Number(this.props.match.params.id))
    }
  }

  render() {
    return (
      <div className="team-profile-container">
        <TeamProfile team={this.props.team}/>
      </div>
    )
  }
}

const mapStateToProps = (state,props) => ({
  team: state.teams && Object.values(state.teams).find(team => team.id === (Number(props.match.params.id))),
  authenticated: !!state.currentUser
})

const mapDispatchToProps = {
  loadTeam
}

export default connect(mapStateToProps, mapDispatchToProps)(TeamProfileContainer)
