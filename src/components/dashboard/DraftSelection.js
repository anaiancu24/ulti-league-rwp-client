import * as React from 'react';
import './DraftSelection.css'

export default function DraftSelection(props) {
  return (
    <div className="dashboard-draft">
    <div>
      <h1>Your team name </h1>
      </div>
      <div>
          <div className='inline'>
      <h2>5/14</h2>
      <p>Players selected</p>
      </div>

      <div className='inline'>
      <h2>06</h2>
      <p>Days left</p>
      </div>

      <div className='inline'>
      <h2>13%</h2>
      <p>Your shares</p>
      </div>

      </div>
    </div>)
}