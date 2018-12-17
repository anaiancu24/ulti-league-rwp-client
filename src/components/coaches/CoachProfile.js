import * as React from 'react';

export default function PlayerProfile(props) {
  const { coach } = props
  return (
  <div className="coach-profile">
    { coach &&
      <p>This is the profile of {coach.user.firstName}  {coach.user.lastName}!</p>
    }
    {
      !coach && 'Loading...'
    }
  </div>)
}