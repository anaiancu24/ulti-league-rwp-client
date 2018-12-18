import * as React from 'react'
import './PlayerPopup.css'



export default function Popup(props) {
    const { pickedPlayer, closePopup, selectPlayer, unSelectPlayerButton } = props
    console.log(pickedPlayer + 'PickedPlayer')
    return (
      <div className='popup'>
        <div className='popup-inner'>
          <div className='player-popup-photo'>
            <img alt='alt' src="https://image.shutterstock.com/image-photo/one-caucasian-soccer-player-man-450w-562661230.jpg" />
          </div>
          <div className='player-popup-content' >
            <p>{pickedPlayer.user.firstName}</p>
            <p>blah blah blah blah blah blah blah blah</p>
            <button>social buttons</button>
            <button onClick={closePopup}>close me</button>
            {selectPlayer && <button onClick={() => selectPlayer(pickedPlayer.id)}>Select Player</button>}
            {unSelectPlayerButton && <button onClick={() => unSelectPlayerButton(pickedPlayer.id)}>UnSelect Player</button>}
          </div>
        </div>
      </div>
    );
  }



