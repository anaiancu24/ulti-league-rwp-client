import * as React from 'react';

export default function DraftPlayerList(props) {
  const { players } = props
  return (
    <div className="chosen-players-items">
      {
        (players) && players.map(player => {
          return (
            <div className='playerlist-box' key={player.id}>
              <button className='add-player-button' onClick={props.togglePopup}>+</button>
              <img className='stockphoto' alt='alt' src="https://image.shutterstock.com/image-photo/one-caucasian-soccer-player-man-450w-562661230.jpg" />
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