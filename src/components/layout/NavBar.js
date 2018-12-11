import React from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import './NavBar.css'


const NavBar = () => {


  return (
      <ul className='menu'>
        <Link to={'/'}> <li className='menuItem'>Home</li></Link>
        <Link to={'/login'}><li className='menuItem' style= {{float:'right'}}> Login</li></Link>
        <Link to={'/signup'}><li className='menuItem' style= {{float:'right'}} >Signup</li></Link>
        <Link to={'/Myaccount'}><li className='menuItem' style= {{float:'right'}}>My account</li></Link>
        <Link to={'/logout'}><li className='menuItem' style= {{float:'right'}} >Logout</li></Link>
      </ul>
  )
}

const mapStateToProps = state => ({
  authenticated: !!state.currentUser
})

export default withRouter(connect(mapStateToProps)(NavBar))
