import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import DraftSelectorContainer from './DraftSelectorContainer';

const nominatedPlayers = [['henk'],['willem'],['frits'],['banana']]


class YourTeamContainer extends PureComponent {

  /* componentDidMount() {
    this.props.loadPlayer(Number(this.props.match.params.id))
  } */

  render() {
    return (
      <div className="your-team-container">
        <h1>Your Team Container</h1>
        <div>
        <h2>Your nominated players</h2>
      
        </div>

        <h2>Add players</h2>
        <h2>Change players</h2>
       
        <DraftSelectorContainer />
        <button>Vote</button> 
      </div>
    )
  }
}

const mapStateToProps = state => ({
  authenticated: !!state.currentUser
})

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(YourTeamContainer)
