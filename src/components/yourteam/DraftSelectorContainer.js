import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import './DraftSelector.css'
import DraftPlayersListContainer from './DraftPlayersListContainer';
import PlayersFilter from './PlayersFilter'
import ChosenPlayersListContainer from './ChosenPlayersListContainer'

class DraftSelectorContainer extends PureComponent {

  render() {
    return (
      <div className="selector-container">
            <div className='draft-players-list-container'>
              <PlayersFilter />
              <DraftPlayersListContainer />
            </div>
            <div className='chosen-players-list-container'>
              <div className='chosen-players-title'>
              Selected Players
              </div>
              <ChosenPlayersListContainer />
            </div>
      </div>
    )
  }
}



const mapStateToProps = state => ({
  authenticated: !!state.currentUser
})

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(DraftSelectorContainer)
