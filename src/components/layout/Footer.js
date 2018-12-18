import React from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import youtube from '../../images/YOUTUBEICON.png'
import facebook from '../../images/FACEBOOKICON.png'
import insta from '../../images/INSTAICON.png'
import twitter from '../../images/TWITTERICON.png'

const Footer = (props) => {
  return (
    <div className="footer">
      <h3>CONTACT</h3>
      <div className="social-media-icons">
      <img src={youtube} alt="youtube-icon"></img>
      <img src={insta} alt="insta-icon"></img>
      <img src={facebook} alt="facebook-icon"></img>
      <img src={twitter} alt="twitter-icon"></img>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({

})

export default withRouter(connect(mapStateToProps)(Footer))
