

import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PlayersOverview from './PlayersOverview';
import { loadPlayers } from '../../actions/players'


class PlayersOverviewContainer extends PureComponent {

  componentDidMount() {
    if (!this.props.players) {
      this.props.loadPlayers()
    }
    
  }

  render() {
    return (
      <div className="player-overview-container">
        <PlayersOverview players={this.props.players}/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  players: state.players && Object.values(state.players),
  authenticated: !!state.currentUser
})

const mapDispatchToProps = {
  loadPlayers
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayersOverviewContainer)
