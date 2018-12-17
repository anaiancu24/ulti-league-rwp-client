import React, { PureComponent } from 'react';
import YouTube from 'react-youtube';


export default class HomePageSlider extends PureComponent {

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  render() {
    const opts = {
      height: '550',
      width: '900',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };
    return (
      <div className="media-content-container">
        <YouTube
          videoId="xuzS44yv6HY"
          opts={opts}
          onReady={this._onReady}
        />
      </div>
    )
  }


}

