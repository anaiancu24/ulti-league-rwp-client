import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import SelectorContainer from './SelectorContainer';
import {loadPlayers} from '../../actions/players'
import {loadUserData} from '../../actions/users'
import {loadOwner} from '../../actions/owners'
import {loadAvailablePlayersForOwner} from '../../actions/availablePlayers'
import './YourTeam.css'




class YourTeamContainer extends PureComponent {

  componentDidMount() {
    console.log('123')
    if(!this.props.ownerId)
      this.props.loadOwner()
    if (!this.props.players) {
      this.props.loadPlayers()
    if (!this.props.userData) 
    this.props.loadUserData()
    if(!this.availablePlayers)
    this.props.loadAvailablePlayersForOwner(this.props.ownerId)
     
    }
  }
  render() {

    return (
      <div className="your-team-container">
        <h1>Your Team Container</h1>
        {this.props.availablePlayers && <p>{this.props.availablePlayers}</p>}
        <div>
        <h2>Your nominated players</h2>
        </div>
        <h2>Add players</h2>
        <h2>Change players</h2>

        {/* {this.props.players && <p>Voted: {this.props.players} </p>} */}

        <SelectorContainer players={this.props.players}/>
        <button>Vote</button> 
      </div>
    )
  }
}

const mapStateToProps = state => ({
  authenticated: !!state.currentUser,
  // players : state.owner && state.owner.players,   // selected players
  players: state.players && state.players,
  ownerId : state.owner && state.owner.id,
  availablePlayers: state.availablePlayers && state.availablePlayers,  // nominated players
  userData: state.userData,
})

const mapDispatchToProps = {
  loadPlayers,
  loadAvailablePlayersForOwner,
  loadUserData,
  loadOwner
}

export default connect(mapStateToProps, mapDispatchToProps)(YourTeamContainer)
