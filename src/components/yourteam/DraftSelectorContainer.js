import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import './DraftSelector.css'
import DraftPlayersListContainer from './DraftPlayersListContainer';


class DraftSelectorContainer extends PureComponent {

  render() {
    return (
      <div className="draft-selector-container">
        <DraftPlayersListContainer />
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
