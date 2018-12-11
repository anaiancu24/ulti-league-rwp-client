import React from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import './Footer.css'


const Footer = (props) => {
  return (
    <div className="footer">
      <ul>
        <li><a href='/home'>Home</a></li>
        <li><a href='/'>Dummy</a></li>
        <li><a href='/'>Dummy</a></li>
      </ul>
    </div>
  )
}

const mapStateToProps = state => ({

})

export default withRouter(connect(mapStateToProps)(Footer))
