import * as React from 'react';

export default function OwningSteps(props) {
  return (
    <div className="owning-steps">
      <h2>Co-owning in 3 Steps</h2>
      <div className="step-container">
        <div>
          <h3>1.<br></br>Pick a team</h3>
          <p>Many teams will be vying for a spot in the new UltiLeague! Pick the team you want to see play against other great teams and start rooting!</p>
          <p>For each region, the teams that have the most support will play!</p>
        </div>

        <div>
          <h3>2.<br></br>Vote on player selection</h3>
          <p>During pre-season all co-owners together get to decide with the coach which players would be best for the team!</p>
          <p>See highlights of players and their statistics and start building your draft selection!</p>
        </div>

        <div>
          <h3>3.<br></br>Decide on Shares</h3>
          <p>A co-owner will invest €10 in the team, which entitles you to vote on the player selection!</p>
          <p>If you want to have your vote counted for more, you can buy more shares. Every €10 extra means your vote counts for one extra!</p>
        </div>
      </div>
    </div>)
}