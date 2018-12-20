import * as React from 'react';

export default function BecomeOwnerForm(props) {
  const { teams } = props
  return (
    <div className="become-owner-form">
      <h2>HELP YOUR TEAM PLAY</h2>
      <h2>Become a Spirit<br></br>Owner</h2>

      <form onSubmit={props.onSubmit}>

        <select className="area-select" defaultValue="default">
          <option value="default">Select your area</option>
          <option value="amsterdam">Amsterdam</option>
        </select>

        <select className="team-select" defaultValue="default" name="selectedTeam" onChange={props.onSelect}>
          <option value="default">Pick your team</option>
          {
            (teams) && teams.map(team => {
              return (
                <option key={team.id} value={team.id}>{team.name}</option>
              )
            })
          }
        </select>
        <button type="submit">Let's help the coach!</button>
      </form>
    </div>)
}