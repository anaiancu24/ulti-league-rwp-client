import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import DraftList from './DraftList';
import { loadPlayers} from '../../actions/players'
import PlayerPopup from './PlayerPopup'


class DraftListContainer extends PureComponent {

state = {
  showPopup: false  
}

//  componentDidMount() {
//     if (!this.props.players) {
//       this.props.loadPlayers()
//     }
//   }

 togglePopup = () => {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  render() {
    return (
      <div className='draft-list'>
        <DraftList togglePopup={this.togglePopup} players={this.props.players}/>
        {this.state.showPopup && 
          <PlayerPopup closePopup={this.togglePopup}/> 
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  // players: state.players && Object.values(state.players),
  authenticated: !!state.currentUser
})

const mapDispatchToProps = {
  loadPlayers
}

export default connect(mapStateToProps, mapDispatchToProps)(DraftListContainer)