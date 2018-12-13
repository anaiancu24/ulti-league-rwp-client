import * as React from 'react';
import { Link } from 'react-router-dom';

export default function TeamsOverview (props) {
    const { teams } = props
    return (
      <div className="teams-overview">
        <h2>An overview of our Teams!</h2>
        <ul>
          {
            (teams) && teams.map(team => {
              return (
                <li key={team.id}>
                  <Link to={`/teams/${team.id}`}>{team.name} from {team.location}</Link>
                </li>
              )
            })
          }
          {
            !props.teams && 'Loading...'
          }
        </ul>
  
      </div>)
}