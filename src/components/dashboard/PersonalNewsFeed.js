import * as React from 'react';
import news from '../../images/NewsFeedContent.svg'

export default function PersonalNewsFeed(props) {
  return (
    <div>
          <button className="label">Your news feed</button>

    <div className="dashboard-news">

    <img className='newspic' src={news} alt='pict'></img>
      
    </div> 
    
    </div>)
}