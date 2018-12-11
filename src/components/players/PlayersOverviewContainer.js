

import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PlayersOverview from './PlayersOverview';
import { loadPlayers } from '../../actions/players'


class PlayersOverviewContainer extends PureComponent {

  /* componentDidMount() {
    this.props.loadPlayer(Number(this.props.match.params.id))
  } */

  render() {
    return (
      <div className="player-overview-container">
        <PlayersOverview />
      </div>
    )
  }
}

const mapStateToProps = state => ({

  authenticated: !!state.currentUser
})

const mapDispatchToProps = {
  loadPlayers
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayersOverviewContainer)
