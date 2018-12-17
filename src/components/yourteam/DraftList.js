import * as React from 'react';

export default function DraftList(props) {
  const { players } = props
  return (
    <div className="draft-box">
      {
        (players) && players.map(player => {
          return (
            <div className='draft-item' key={player.id}>
              <button className='draft-add-button' onClick={props.togglePopup}>+</button>
              <img className='draft-player-photo' alt='alt' src="https://image.shutterstock.com/image-photo/one-caucasian-soccer-player-man-450w-562661230.jpg" />
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