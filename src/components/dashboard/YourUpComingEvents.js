import * as React from 'react';
import blackdot from '../../images/blackdot.png'
import upcoming from '../../images/FixturesCard.svg'

export default function YourUpComingEvents(props) {
  return (
    <div>
           <button className="label">Your team's matches</button>

    <div className="dashboard-events">
 <div className='title'>

<img className="bullet" src={blackdot} alt="pic"></img>
</div>

 <div className='title'>
<h1 className='titletext'> Your team name </h1>
</div>  

{/* <div className='insidebox'>
<p>06 Jun 2019 - Gent Sport Complex</p>
<ul>

  <div className='inline'>
  <button className='timebutton'>12:00</button>
  </div>
  <div className='inline'>

        <li>GAME1</li>
        </div>
      </ul>

</div> */} 

    </div> 
    
    
    <img className='matches' src={upcoming} alt="pict"></img>
    </div>)
}