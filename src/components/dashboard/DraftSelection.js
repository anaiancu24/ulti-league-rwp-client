import * as React from 'react';
import './DraftSelection.css'
import blackdot from '../../images/blackdot.png'
import { Link } from 'react-router-dom'

export default function DraftSelection(props) {
  console.log(props.team)
  return (
    <div>
      <button className="label">Your draft selection</button>
      <div className="dashboard-draft">

        <div className='title'>

          <img className="bullet" src={blackdot} alt="pic"></img>
        </div>
        <div className='title'>
          <h1 className='titletext'>{props.team.name}</h1>
        </div>

      </div>
      <div>
        <div className='datas'>
          <div className='inline'>
            <h2 className='numbers'>{props.owner.players.length}<span className="smaller">/14</span></h2>
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
          <Link to='/yourteam'>
            <button className="button1">Manage your selection</button>
          </Link>

        </div>
      </div>
    </div>)
}