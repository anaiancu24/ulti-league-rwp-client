import * as React from 'react';
import leagues from '../../images/LeagueTableMockUp.svg'

export default function LeagueTable(props) {
  return (
    <div>
          <button className="label">League Table</button>
    <div className="dashboard-league-table">
    <img className='leagues' src={leagues} alt='pict'></img>
      
    </div> 
    </div>)
}