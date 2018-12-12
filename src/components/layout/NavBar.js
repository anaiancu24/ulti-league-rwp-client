import React from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import './NavBar.css'


const NavBar = (props) => {
  const { authenticated } = props

  return (
      <ul className='menu'>
        <Link to={'/'}> <li className='menuItem'>Home</li></Link>
        <Link to={'/coaches'}> <li className='menuItem'>Coaches</li></Link>
        <Link to={'/communityowners'}> <li className='menuItem'>Community Owners</li></Link>
        {
          !authenticated &&
          <Link to={'/login'}><li className='menuItem' style={{ float: 'right' }}> Login</li></Link>
        }
        {
          !authenticated &&
          <Link to={'/signup'}><li className='menuItem' style={{ float: 'right' }} >Signup</li></Link>
        }
        {
          authenticated &&
          <Link to={'/Myaccount'}><li className='menuItem' style={{ float: 'right' }}>My account</li></Link>
        }
        {
          authenticated &&
          <Link to={'/logout'}><li className='menuItem' style={{ float: 'right' }} >Logout</li></Link>
        }
      </ul>

  )
}

const mapStateToProps = state => ({
  authenticated: !!state.currentUser
})

export default withRouter(connect(mapStateToProps)(NavBar))
