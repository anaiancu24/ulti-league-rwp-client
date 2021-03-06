import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import DraftListContainer from './DraftListContainer';
import SelectedListContainer from './SelectedListContainer';
import DraftListSearch from './DraftListSearch'
import {loadPlayers} from '../../actions/players'
import {clearSelection} from '../../actions/selectPlayer'
import {withRouter} from 'react-router'

class SelectorContainer extends PureComponent {

state = {
  initialPlayers: [],
  playersFiltered: [],
  males: true,
  females: true
}

componentDidMount() {
  setTimeout(() => {
    this.setState({
      initialPlayers: this.props.availablePlayers,
      playersFiltered: this.props.availablePlayers
    })
  }, 1000);
}

checkBoxMales = () => {
if(this.state.females) { 
  this.setState({
    playersFiltered: this.state.playersFiltered.filter(player => player.gender === 'male'),
    females: false
  }) 
 } else {
  this.setState({
    playersFiltered: this.props.availablePlayers,
    females: true
  })
}
}


checkBoxFemales = () => {
  if(this.state.males) { 
    this.setState({
      playersFiltered: this.state.playersFiltered.filter(player => player.gender === 'female'),
      males: false
    }) 
   } else {
    this.setState({
      playersFiltered: this.props.availablePlayers,
      males: true
    })
  }
  }

sortByLastName = () => {
  console.log(this.state.playersFiltered)
  this.setState({
   
    playersFiltered: this.state.playersFiltered.sort((a, b) => {
      if(a.user.lastName < b.user.lastName) { return -1; }
      if(a.user.lastName > b.user.lastName) { return 1; }
      return 0;
    }
  )
})
console.log(this.state.playersFiltered)
}

renderRedirect = () => {
  this.props.history.push('/dashboard')
}


clearSelectionButton = () => {
  this.props.clearSelection(this.props.ownerId)
}


FilterList = (event) => {
    let updatedList = this.state.initialPlayers;
    updatedList = updatedList.filter((player) => {
        return player.user.firstName.toLowerCase().search(
        event.target.value.toLowerCase()) !== -1;  
    });
    this.setState({playersFiltered: updatedList});
  }

  render() {

    if(!this.props.availablePlayers) {
      return <h1>Loading...</h1> 
    }

    return (
      <div className="selectorbox-container">
        <div className='draft-list-container'>
          <div className="draft-filter">
            <label className='checkbox-button'>
            <input onChange={this.checkBoxMales} type="checkbox"/><span>Only Males</span>
            </label>
            <label className='checkbox-button'>
            <input onChange={this.checkBoxFemales} type="checkbox"/><span>Only Females</span>
            </label>
            <button className='draft-filter-sort' onClick={this.sortByLastName}>Sort by name</button>
            <DraftListSearch  FilterList={this.FilterList}/>
          </div>
          <DraftListContainer availablePlayers={this.state.playersFiltered.filter(player => !this.props.selectedPlayers.find(x => x.id === player.id ))}/>
        </div>
        <div className='selected-list-container'>
          <div className='selected-title'>
            Your selection
              </div>
          <SelectedListContainer selectedPlayers={this.props.selectedPlayers} />
          <div className='selected-stats-area'>
              <p>{this.props.selectedPlayers.filter(player => player.gender === 'female').length}<strong>/7 Female</strong></p>
              <p>{this.props.selectedPlayers.filter(player => player.gender === 'male').length}<strong>/7 Male</strong></p>
          </div>
          <div className='selected-button-area'>
              <button className='selected-clear-button' onClick={this.clearSelectionButton}>Reset</button>
              <button className='selected-save-button' onClick={this.renderRedirect}>Save</button>
             
          </div>
        </div>
      </div>
    )
  }
}



const mapStateToProps = state => ({
  authenticated: !!state.currentUser,
  availablePlayers: state.availablePlayers && state.availablePlayers,
  selectedPlayers: state.owner && state.owner.players,
  ownerId: state.owner && state.owner.id
})

const mapDispatchToProps = {
  loadPlayers,
  clearSelection
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SelectorContainer))
