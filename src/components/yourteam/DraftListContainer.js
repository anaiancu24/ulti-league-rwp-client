import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import DraftList from './DraftList';
import { loadPlayers} from '../../actions/players'
import PlayerPopup from './PlayerPopup'
import {selectPlayer} from '../../actions/selectPlayer'


class DraftListContainer extends PureComponent {

state = {
  showPopup: false,
  playerId: ''  
}



selectPlayer = (playerId) => {
  if(this.state.showPopup) {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  this.props.selectPlayer(this.props.ownerId, playerId)
}

 togglePopup = (playerId) => {

    this.setState({
      playerId,
      showPopup: !this.state.showPopup
    });
  }

  render() {
    return (
      <div className='draft-list'>
        <DraftList togglePopup={this.togglePopup} availablePlayers={this.props.availablePlayers} selectPlayer={this.selectPlayer}/>
        {this.state.showPopup && 
          <PlayerPopup closePopup={this.togglePopup} pickedPlayer={this.props.availablePlayers.find(player => player.id === this.state.playerId)} selectPlayer={this.selectPlayer} /> 
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  authenticated: !!state.currentUser,
  ownerId : state.owner && state.owner.id
})

const mapDispatchToProps = {
  loadPlayers,
  selectPlayer
}

export default connect(mapStateToProps, mapDispatchToProps)(DraftListContainer)