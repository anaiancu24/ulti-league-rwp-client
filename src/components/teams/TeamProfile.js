import * as React from 'react';

export default function TeamProfile(props) {
  const { team } = props
  return (
    <div className="team-profile">
      <h2>Team Profile</h2>
      {
        team &&
        <div>
          <p>{team.name}</p>
          <p>Location: {team.location}</p>
        </div>
      }
      {
        !team && 'Loading...'
      }

    </div>)
}