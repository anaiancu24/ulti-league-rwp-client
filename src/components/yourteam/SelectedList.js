import * as React from 'react';


export default function SelectedList(props) {
  const { selectedPlayers, togglePopup } = props
  return (
    <div className="selected-box">
      {
        (selectedPlayers) && selectedPlayers.map(player => {
          return (
            <div className='selected-item' key={player.id}>
              <button className='remove-selected-player-button' onClick={() => props.unSelectPlayerButton(player.id)}>X</button>
              <img onClick={() => togglePopup(player.id)} className='selected-player-photo' alt='alt' src="https://image.shutterstock.com/image-photo/one-caucasian-soccer-player-man-450w-562661230.jpg" />
              <p className='playername'>{player.user.firstName} {player.id} </p>
            </div>
          )
        })
      }
      {
        !props.selectedPlayers && 'Loading...'
      }
    </div>)
}