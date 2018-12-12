import * as React from 'react';

export default function TeamShares(props) {
  return (
    <div className="dashboard-team-shares">
      <h1>You own shares for this team</h1>
      <table>
        <tr>
          <th>Team</th>
          <th>Ranking</th>
          <th>Shares</th>
          <th>Voting Power</th>
        </tr>
        <tr>
          <td>Team1</td>
          <td>1</td>
          <td>200</td>
          <td>40%</td>
        </tr>
      </table>
    </div>)
}