import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import SelectedList from './SelectedList';
import { unSelectPlayer} from '../../actions/selectPlayer'
import PlayerPopup from './PlayerPopup'



class SelectedListContainer extends PureComponent {


  state = {
    showPopup: false,
    playerId: ''  
  }
  
  
  unSelectPlayerButton = (playerId) => {
    if(this.state.showPopup) {
      this.setState({
        showPopup: !this.state.showPopup
      });
    }
  
    this.props.unSelectPlayer(this.props.ownerId, playerId)
  }
  
  togglePopup = (playerId) => {
    this.setState({
        playerId,
        showPopup: !this.state.showPopup
      });
    }

render() {
    return (
      <div className='selected-list' >
        <SelectedList togglePopup={this.togglePopup} selectedPlayers={this.props.selectedPlayers} unSelectPlayerButton={this.unSelectPlayerButton}/>
        {this.state.showPopup && 
        <PlayerPopup closePopup={this.togglePopup} pickedPlayer={this.props.selectedPlayers.find(player => player.id === this.state.playerId)} unSelectPlayerButton={this.unSelectPlayerButton} /> 
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  authenticated: !!state.currentUser,
  ownerId: state.owner && state.owner.id
})

const mapDispatchToProps = {

  unSelectPlayer
  
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectedListContainer)




