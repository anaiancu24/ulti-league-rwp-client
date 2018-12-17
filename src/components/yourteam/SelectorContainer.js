import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import DraftListContainer from './DraftListContainer';
import SelectedListContainer from './SelectedListContainer';
import DraftListSearch from './DraftListSearch'
import {loadPlayers} from '../../actions/players'

class SelectorContainer extends PureComponent {

state = {
  initialPlayers: [],
  playersfiltered: []
}

componentDidMount() {
  if (!this.props.players) {
    this.props.loadPlayers()
  }
  setTimeout(() => {
    console.log(this.props.players)
    this.setState({
      initialPlayers: this.props.players,
      playersfiltered: this.props.players })
  }, 1000);
  
}




FilterList = (event) => {
    let updatedList = this.state.initialPlayers;
    updatedList = updatedList.filter((player) => {
        return player.location.toLowerCase().search(
        event.target.value.toLowerCase()) !== -1;
    });
    console.log(updatedList)
    this.setState({playersfiltered: updatedList});
    
  }

  render() {
     
    console.log(this.state.initialPlayers)

    return (
      <div className="selectorbox-container">
        <div className='draft-list-container'>
          <div className="draft-filter">
            <input type="checkbox" /> Males
            <input type="checkbox" /> Females
            <DraftListSearch  FilterList={this.FilterList}/>
            <button>Sort by Alphabet</button>
          </div>
          <DraftListContainer players={this.state.playersfiltered}/>
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
  authenticated: !!state.currentUser,
  players: state.players
})

const mapDispatchToProps = {
  loadPlayers
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectorContainer)
