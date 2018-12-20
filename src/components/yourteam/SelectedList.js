import * as React from 'react';


export default function SelectedList(props) {
  const { selectedPlayers, togglePopup, unSelectPlayerButton } = props
  return (
    <div className="selected-box">
      {
        selectedPlayers && selectedPlayers.map((player, index) => {
          return (
            <div key={player.id} className={`selected-item-${index}`}>
              <img onClick={() => togglePopup(player.id)} className='selected-player-photo' alt='alt' src={player.pictureURL} />
              <p className='selected-item-text'>{player.user.lastName} </p>
              <button className='remove-selected-player-button' onClick={() => unSelectPlayerButton(player.id)}>X</button>
            </div>
          )
        })
      }
      {
        !props.selectedPlayers && 'Loading...'
      }
    </div>)
}