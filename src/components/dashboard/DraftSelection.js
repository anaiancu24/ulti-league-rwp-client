import * as React from 'react';
import './DraftSelection.css'
import blackdot from '../../images/blackdot.png'

export default function DraftSelection(props) {
  return (
    <div>
      <button className="label">Your draft selection</button>
      <div className="dashboard-draft">

        <div className='title'>

          <img className="bullet" src={blackdot} alt="pic"></img>
        </div>
        <div className='title'>
          <h1 className='titletext'> Your team name </h1>
        </div>

      </div>
      <div>
        <div className='datas'>
          <div className='inline'>
            <h2 className='numbers'>5<span className="smaller">/14</span></h2>
            <p>Players selected</p>
          </div>

          <div className='inline'>
            <h2 className='numbers'>06</h2>
            <p>Days left</p>
          </div>

          <div className='inline'>
            <h2 className='numbers'>13%</h2>
            <p>Your shares</p>
          </div>
        </div>
        <div>
          <button className="button1">Manage your selection</button>
        </div>
      </div>
    </div>)
}