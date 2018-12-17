import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import './SelectorContainer.css'
import DraftContainer from './DraftListContainer';
import SelectedListContainer from './SelectedListContainer';

class SelectorContainer extends PureComponent {

  render() {
    return (
      <div className="selectorbox-container">
        <div className='draft-list-container'>
          <div className="draft-filter">
            <input type="checkbox" /> Males
            <input type="checkbox" /> Females
            <input type="text" placeholder="Search.." />
            <button>Sort by Alphabet</button>
          </div>
          <DraftContainer />
        </div>
        <div className='selected-list-container'>
          <div className='selected-title'>
            Your selection
              </div>
          <SelectedListContainer />
          <div className='selected-stats-area'>
              <p>2/7 F</p>
              <p>4/7 M</p>
          </div>
          <div className='selected-save-area'>
              <button>save</button>
          </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(SelectorContainer)
