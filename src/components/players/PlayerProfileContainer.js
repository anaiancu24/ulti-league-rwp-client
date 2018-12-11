import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PlayerProfile from './PlayerProfile';
import { loadPlayer } from '../../actions/players'


class PlayerProfileContainer extends PureComponent {

  /* componentDidMount() {
    this.props.loadPlayer(Number(this.props.match.params.id))
  } */

  render() {
    return (
      <div className="player-profile-container">
        <PlayerProfile />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  /* player: state.player,
  playerId: state.event && state.event.id, */
  authenticated: !!state.currentUser
})

const mapDispatchToProps = {
  loadPlayer
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerProfileContainer)