import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import DraftPlayerList from './DraftPlayerList';
import { loadPlayers} from '../../actions/players'


class DraftPlayersListContainer extends PureComponent {

 componentDidMount() {
    if (!this.props.players) {
      this.props.loadPlayers()
    }
    
  }

  render() {
    return (
      <div className="draft-player-list-container">
        <DraftPlayerList players={this.props.players}/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  players: state.players && Object.values(state.players),
  authenticated: !!state.currentUser
})

const mapDispatchToProps = {
  //loadPlayersByTeam
  loadPlayers
}

export default connect(mapStateToProps, mapDispatchToProps)(DraftPlayersListContainer)