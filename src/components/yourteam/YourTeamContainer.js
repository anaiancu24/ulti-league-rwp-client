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
    
    if(!this.props.ownerId)
      this.props.loadOwner()   
  }
  
  render() {
    if(!this.props.availablePlayers && this.props.ownerId) {
      this.props.loadAvailablePlayersForOwner(this.props.ownerId)
      }
   
    
    if(!this.props.availablePlayers) {
      return (
      <div>
      <h1>Loading..</h1>
      <img alt='test' src={'https://www.flickr.com/photos/162745101@N05/44555968950/in/dateposted-public/'} />
      </div>)
    }

    return (
    <div className='your-team-master-container'>
      <div className="your-team-container">
        <h1 className="selector-header">Your Team Container</h1>
        <SelectorContainer />
      </div>
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
