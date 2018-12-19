import * as React from 'react';

export default function BecomeOwnerForm(props) {
  const { teams } = props
  return (
    <div className="become-owner-form">
      <h2>HELP YOUR TEAM PLAY</h2>
      <h2>Become a Spirit<br></br>Owner</h2>
      <form>
        <select className="area-select" defaultValue="default">
          <option value="default">Amsterdam</option>
        </select>
        <select className="team-select" defaultValue="default">
          <option value="default">Pick your team</option>
          {
            (teams) && teams.map(team => {
              return (
                <option>{team.name}</option>
              )
            })
          }
         {/*  <option value="team1">Team1</option>
          <option value="team2">Team2</option>
          <option value="team3">Team3</option>
          <option value="team4">Team4</option> */}
        </select>
        <button>Let's help the coach!</button>
      </form>

    </div>)
}