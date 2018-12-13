import * as React from 'react';

export default function DraftPlayerList(props) {
  const { players } = props
  return (
    <div className="draft-players-list">
        {
          (players) && players.map(player => {
            return (
              <div className="draft-player-card" key={player.id}>
                <p>Player</p>
              </div>
            )
          })
        }
        {
          !props.players && 'Loading...'
        }
    </div>)
}