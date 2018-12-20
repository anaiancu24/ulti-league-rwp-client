import * as React from 'react';
import indicator from '../../images/Polygon.png'

export default function InvestInfo(props) {
  const p1 = "Spiritholder’s help make a team’s life easier by helping the team cover their budget! In return, during preseason all the Spiritholders of a team can nominate players for their favourite selection. The more shares, the more voting power!"
  return (
    <div className="invest-info">
      <h1>Decide how you want<br></br>to help!</h1>

      <p>{p1}</p>

      <div className="budget">
        <h3>Team's current Budget</h3>
        <div className="current-budget">
          <h2>€ 280</h2>
          <h4>Budget almost covered</h4>
        </div>
        <div className="progress-bar">
          <span></span>
          <img src={indicator} alt="progress-indicator" className="progress-indicator"></img>
        </div>
        <div className="milestones">
          <div className="minimum-milestone">
            <h3>Minimum</h3>
            <img src={indicator} alt="minimum-milestone-indicator"></img>
          </div>
          <div className="decent-milestone">
            <h3>Decent</h3>
            <img src={indicator} alt="decent-milestone-indicator"></img>
          </div>
          <div className="luxurious-milestone">
            <h3>Luxurious</h3>
            <img src={indicator} alt="luxurious-milestone-indicator"></img>
          </div>
        </div>
      </div>

    </div>)
}