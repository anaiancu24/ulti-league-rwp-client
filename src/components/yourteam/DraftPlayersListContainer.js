import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import DraftPlayerList from './DraftPlayerList';
import { loadPlayers} from '../../actions/players'
import PlayerPopup from './PlayerPopup'


class DraftPlayersListContainer extends PureComponent {

state = {
  showPopup: false  
}

 componentDidMount() {
    if (!this.props.players) {
      this.props.loadPlayers()
    }
  }


 togglePopup = () => {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  

  render() {
    return (
      <div className="draft-players-list">
        <DraftPlayerList togglePopup={this.togglePopup} players={this.props.players}/>
        {this.state.showPopup && 
          <PlayerPopup closePopup={this.togglePopup}/> 
        }
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