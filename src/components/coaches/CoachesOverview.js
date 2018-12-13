import * as React from 'react';
import { Link } from 'react-router-dom'

export default function CoachesOverview (props) {
    const { coaches } = props
    return (
      <div className="players-overview">
        <h2>An overview of our Coaches!</h2>
        <ul>
          {
            (coaches) && coaches.map(coach => {
              return (
                <li key={coach.id}>
                  <Link to={`/coaches/${coach.id}`}>{coach.user.firstName} {coach.user.lastName}</Link>
                </li>
              )
            })
          }
          {
            !props.coaches && 'Loading...'
          }
        </ul>
  
      </div>)
}