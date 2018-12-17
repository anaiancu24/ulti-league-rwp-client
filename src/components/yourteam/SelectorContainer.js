import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import DraftListContainer from './DraftListContainer';
import SelectedListContainer from './SelectedListContainer';
import DraftListSearch from './DraftListSearch'
import {loadPlayers} from '../../actions/players'

class SelectorContainer extends PureComponent {

state = {
  initialPlayers: [],
  players: [] 
}

componentWillMount() {
  if (!this.props.players) {
    this.props.loadPlayers()
  }
}

FilterList = async (event) => {
    await this.setState({initialPlayers: this.props.players})
    console.log(this.props.players)
    
    console.log(this.state.initialPlayers)
    console.log(event)
    let updatedList = this.state.initialPlayers;
    updatedList = updatedList.filter((player) => {
      return player.location.toLowerCase().search(
        event.target.value.toLowerCase()) !== -1;
    });
    this.setState({players: updatedList});
  }

  render() {
    return (
      <div className="selectorbox-container">
        <div className='draft-list-container'>
          <div className="draft-filter">
            <input type="checkbox" /> Males
            <input type="checkbox" /> Females
            <DraftListSearch players={this.props.players} FilterList={this.FilterList}/>
            <button>Sort by Alphabet</button>
          </div>
          <DraftListContainer players={this.state.players}/>
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
