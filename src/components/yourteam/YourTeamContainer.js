import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import SelectorContainer from './SelectorContainer';
import {loadPlayers} from '../../actions/players'
import {loadUserData} from '../../actions/users'
import {loadOwner} from '../../actions/owners'
import {loadAvailablePlayersForOwner} from '../../actions/availablePlayers'
import './YourTeam.css'




class YourTeamContainer extends PureComponent {

  componentWillMount() {
    console.log('currrentuser' + this.props.currentUser)
    if(!this.props.ownerId)
      this.props.loadOwner()   
  }
  
  render() {
    if(!this.props.availablePlayers && this.props.ownerId) {
      this.props.loadAvailablePlayersForOwner(this.props.ownerId)
      }
   
    
    if(!this.props.availablePlayers) {
      return <h1>Loading..</h1>
    }

    return (
      <div className="your-team-container">
        <h1>Your Team Container</h1>
        
        <SelectorContainer />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  authenticated: !!state.currentUser,
  currentUser: state.currentUser && state.currentUser,
  ownerId : state.owner && state.owner.id,
  availablePlayers: state.availablePlayers && state.availablePlayers,  // nominated players
  selectedPlayers: state.owner && state.owner.players,   // selected players
  userData: state.userData,
})

const mapDispatchToProps = {
  loadPlayers,
  loadAvailablePlayersForOwner,
  loadUserData,
  loadOwner
}

export default connect(mapStateToProps, mapDispatchToProps)(YourTeamContainer)
