import * as React from 'react';
import { Link } from 'react-router-dom';

export default function PlayersOverview(props) {
  const { players } = props
  return (
    <div className="players-overview">
      <h2>An overview of our Players!</h2>
      <ul>
        {
          (players) && players.map(player => {
            return (
              <li key={player.id}>
                <Link to={`/players/${player.id}`}>{player.user.firstName} {player.user.lastName}</Link>
              </li>
            )
          })
        }
        {
          !props.players && 'Loading...'
        }
      </ul>

    </div>)
}