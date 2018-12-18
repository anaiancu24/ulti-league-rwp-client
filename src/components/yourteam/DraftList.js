import * as React from 'react';

export default function DraftList(props) {
  const { availablePlayers } = props
  return (
    <div className="draft-box">
      {
        (availablePlayers) && availablePlayers.map(player => {
          return (
            <div className='draft-item' key={player.id}>
              <button className='draft-add-button' onClick={() => props.selectPlayer(player.id)}>+</button>
              <img onClick={() => props.togglePopup(player.id)} className='draft-player-photo' alt='alt' src="https://image.shutterstock.com/image-photo/one-caucasian-soccer-player-man-450w-562661230.jpg" />
              <p className='playername'>{player.user.firstName} {player.id} </p>
            </div>
          )
        })
      }
      {
        !props.availablePlayers && 'Loading...'
      }
    </div>)
  
}