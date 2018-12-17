import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import SelectedList from './SelectedList';
import { loadPlayers} from '../../actions/players'


class SelectedListContainer extends PureComponent {

 componentDidMount() {
    if (!this.props.players) {
      this.props.loadPlayers()
    }
  }

  render() {
    return (
      <div className='selected-list' >
        <SelectedList players={this.props.players}/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  players: state.players && Object.values(state.players),
  authenticated: !!state.currentUser
})

const mapDispatchToProps = {
  //loadPlayersByTeam
  loadPlayers
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectedListContainer)