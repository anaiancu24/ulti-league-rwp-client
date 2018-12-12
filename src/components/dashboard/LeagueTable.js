import * as React from 'react';

export default function LeagueTable(props) {
  return (
    <div className="dashboard-league-table">
      <h1>Ulti-League Ranking</h1>
      <table>
        <tr>
          <th>Team</th>
          <th>Goals</th>
          <th>Points</th>
        </tr>
        <tr>
          <td>Team1</td>
          <td>50</td>
          <td>200</td>
        </tr>
        <tr>
          <td>Team2</td>
          <td>40</td>
          <td>100</td>
        </tr>
        <tr>
          <td>Team3</td>
          <td>20</td>
          <td>90</td>
        </tr>
      </table>
    </div>)
}