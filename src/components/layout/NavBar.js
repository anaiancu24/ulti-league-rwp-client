import React from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import './NavBar.css'


const NavBar = (props) => {
  const { authenticated } = props

  return (
    <div className="menu">
      <input type="text" placeholder="Search..."></input>
      <Link to={'/coaches'}> <p className='menuItem'>Coaches</p></Link>
      <Link to={'/communityowners'}> <p className='menuItem'>Community Owners</p></Link>
      <Link to={'/yourteam'}> <p className='menuItem'>Your Team</p></Link>
      {
        !authenticated &&
        <Link to={'/login'}><p className='menuItem' style={{ float: 'right' }}> Login</p></Link>
      }
      {
        !authenticated &&
        <Link to={'/signup'}><p className='menuItem' style={{ float: 'right' }} >Signup</p></Link>
      }
      {
        authenticated &&
        <Link to={'/Myaccount'}><p className='menuItem' style={{ float: 'right' }}>My account</p></Link>
      }
      {
        authenticated &&
        <Link to={'/logout'}><p className='menuItem' style={{ float: 'right' }}>Logout</p></Link>
      }

      <div className="logo" onClick={() => props.history.push('/')}></div>
    </div>


  )
}

const mapStateToProps = state => ({
  authenticated: !!state.currentUser
})

export default withRouter(connect(mapStateToProps)(NavBar))
