import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import SelectorContainer from './SelectorContainer';
import {loadPlayers} from '../../actions/players'
import './YourTeam.css'



class YourTeamContainer extends PureComponent {

  componentDidMount() {
    if (!this.props.players) {
      this.props.loadPlayers()
    }
  }
  render() {

    return (
      <div className="your-team-container">
        <h1>Your Team Container</h1>
        <div>
        <h2>Your nominated players</h2>
        </div>
        <h2>Add players</h2>
        <h2>Change players</h2>
       
        <SelectorContainer players={this.props.players}/>
        <button>Vote</button> 
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

export default connect(mapStateToProps, mapDispatchToProps)(YourTeamContainer)
