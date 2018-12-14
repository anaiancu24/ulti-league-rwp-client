import React, { PureComponent } from 'react'
// import PlayerProfileContainer from '../players/PlayerProfileContainer'



export default class Popup extends PureComponent {
  
  
  render() {
    return (
      <div className='popup'>
        <div className='popup_inner'>
          {/* <PlayerProfileContainer /> */}
          <h1>test</h1>
        <button onClick={this.props.closePopup}>close me</button>
        </div>
      </div>
    );
  }
}