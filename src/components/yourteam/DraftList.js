import * as React from 'react';

export default function DraftList(props) {
  const { availablePlayers, togglePopup } = props
  return (
    <div className="draft-box">
      {
        (availablePlayers) && availablePlayers.map(player => {
          return (
            <div className='draft-item' key={player.id}>
              
              <img onClick={() => togglePopup(player.id)} className='draft-player-photo' alt='alt' src={player.pictureURL} />
              <p className='draft-item-text'>{player.user.firstName + ' ' + player.user.lastName}</p>
              <button className='draft-add-player-button' onClick={() => props.selectPlayer(player.id)}>+</button>
            </div>
          )
        })
      }
      {
        !props.availablePlayers && 'Loading...'
      }
    </div>)
  
}