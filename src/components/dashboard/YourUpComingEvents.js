import * as React from 'react';
import blackdot from '../../images/blackdot.png'

export default function YourUpComingEvents(props) {
  return (
    <div className="dashboard-events">
<div className='title'>

<img className="bullet" src={blackdot} alt="pic"></img>
</div>
<div className='title'>
<h1 className='titletext'> Your team name </h1>
</div> 

<div className='insidebox'>
<p>06 Jun 2019 - Gent Sport Complex</p>
<ul>

  <div className='inline'>
  <button className='timebutton'>12:00</button>
  </div>
  <div className='inline'>

        <li>GAME1</li>
        </div>
      </ul>

</div>

    </div>)
}