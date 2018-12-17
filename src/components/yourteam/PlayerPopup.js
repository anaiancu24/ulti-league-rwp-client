import React, { PureComponent } from 'react'
import './PlayerPopup.css'



export default class Popup extends PureComponent {
  
  
  render() {
    return (
      <div className='popup'>
        <div className='popup-inner'>
          <div className='player-popup-photo'>
            <img alt='alt' src="https://image.shutterstock.com/image-photo/one-caucasian-soccer-player-man-450w-562661230.jpg" />
          </div>
          <div className='player-popup-content' >
            <p>Paul van de Ven</p>
            <p>blah blah blah blah blah blah blah blah</p>
            <button>social buttons</button>
            <button onClick={this.props.closePopup}>close me</button>
          </div>
        </div>
      </div>
    );
  }
}