import React from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'


const Footer = (props) => {
  return (
    <ul>
      <li><a href='/home'>Home</a></li>
      <li><a href='/'>Dummy</a></li>
      <li><a href='/'>Dummy</a></li>
    </ul>
  )
}

const mapStateToProps = state => ({

})

export default withRouter(connect(mapStateToProps)(Footer))
