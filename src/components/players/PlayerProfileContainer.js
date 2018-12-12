import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PlayerProfile from './PlayerProfile';
import { loadPlayer } from '../../actions/players'


class PlayerProfileContainer extends PureComponent {

  componentDidMount() {
    if (!this.props.player) {
      this.props.loadPlayer(Number(this.props.match.params.id))
    }
  }

  render() {
    return (
      <div className="player-profile-container">
        <PlayerProfile player={this.props.player} />
      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({
  player: state.players && Object.values(state.players).find(player => player.id === (Number(props.match.params.id))),
  authenticated: !!state.currentUser
})

const mapDispatchToProps = {
  loadPlayer
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerProfileContainer)