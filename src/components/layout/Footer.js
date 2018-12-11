import React from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'


const Footer = (props) => {


  return (
    <nav>
      <ul>
        <li><a href='/home'>Home</a></li>
        <li><a href='/'>Dummy</a></li>
        <li><a href='/'>Dummy</a></li>
      </ul>
    </nav>
  )
}

const mapStateToProps = state => ({

})

export default withRouter(connect(mapStateToProps)(Footer))
