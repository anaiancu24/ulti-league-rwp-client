import React, {PureComponent} from 'react'
import './PlayerPopup.css'
import stats from '../../images/popupStatistics.png'
import YouTube from 'react-youtube';
import youtube from '../../images/YOUTUBEICON.png'
import facebook from '../../images/FACEBOOKICON.png'
import insta from '../../images/INSTAICON.png'
import twitter from '../../images/TWITTERICON.png'





export default class Popup extends PureComponent {

  onReady= (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

render() {

    
    const opts = {
      height: '240',
      width: '450',
      playerVars: { 
        autoplay: 1
      }
    };

    const { pickedPlayer, togglePopup, selectPlayer, unSelectPlayerButton } = this.props

return (
      <div className='popup' onClick={togglePopup}>
        <div className='popup-inner' onClick={(event) => event.stopPropagation() }>
          
          <button className='popup-close-button' onClick={togglePopup}>X</button>
          <div className='popup-player-content'>
            <img className='popup-player-image' alt='alt' src={pickedPlayer.pictureURL} />
            <div className='popup-player-info'>
              <p>{pickedPlayer.user.firstName + pickedPlayer.user.lastName}</p>
              <p>{pickedPlayer.position}</p>
              <p>{pickedPlayer.location}</p>
              <div className='popup-player-social'>
                <img src={youtube} alt="youtube-icon"></img>
                <img src={insta} alt="insta-icon"></img>
                <img src={facebook} alt="facebook-icon"></img>
                <img src={twitter} alt="twitter-icon"></img>
               </div>
            </div>
            <img className='popup-stats' src={stats} alt='stats'></img>
            <p className='popup-player-infotext'>Lorem ipsum dolor amet tumeric activated charcoal unicorn, tilde poke cred enamel pin gentrify. Tbh vaporware post-ironic, dreamcatcher adaptogen affogato gentrify pinterest gochujang locavore sartorial thundercats. Asymmetrical cardigan wayfarers.</p>
            <div className="popup-youtube">
              <YouTube
              videoId={pickedPlayer.socialMedia}
                opts={opts}
              onReady={this.onReady}
              />
            </div> 
          </div>
          <div className='popup-buttons-area'></div>
          <button className='popup-button-follow'>Follow Player</button>
          {selectPlayer && <button className='popup-button-select' onClick={() => selectPlayer(pickedPlayer.id)}>Select Player</button>}
          {unSelectPlayerButton && <button className='popup-button-select' onClick={() => unSelectPlayerButton(pickedPlayer.id)}>UnSelect Player</button>}
        </div>
      </div>
    );
  }
}