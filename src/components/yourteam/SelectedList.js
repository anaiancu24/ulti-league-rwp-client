import * as React from 'react';

export default function SelectedList(props) {
  const { players } = props
  return (
    <div className="selected-box">
      {
        (players) && players.map(player => {
          return (
            <div className='selected-item' key={player.id}>
              <button className='remove-selected-player-button' onClick={props.togglePopup}>X</button>
              <img className='selected-player-photo' alt='alt' src="https://image.shutterstock.com/image-photo/one-caucasian-soccer-player-man-450w-562661230.jpg" />
              <p className='playername'>Willem {player.id} </p>
            </div>
          )
        })
      }
      {
        !props.players && 'Loading...'
      }
    </div>)
}