import * as React from 'react';

export default function PlayerProfile(props) {
  const { player } = props
  return (
    <div className="player-profile">
      <h2>Super Awesome Profile of</h2>
      {
        player &&
        <div>
          <h2>{player.user.firstName} {player.user.lastName}</h2>
        </div>
      }
      {
        !player && 'Loading...'
      }

    </div>)
}