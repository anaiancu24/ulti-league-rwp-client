import React from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import './NavBar.css'
import logo from '../../images/LOGO.png'
import searchIcon from '../../images/SearchIcon.png'


const NavBar = (props) => {
  const { authenticated } = props

  return (
    <div className="menu">
      <div className="search">
        <input type="text" placeholder="..."></input>
        <img src={searchIcon} alt="search-icon"></img>
      </div>

      {
        !authenticated &&
        <div className="dropdown">
          <button class="dropbtn">LOG IN / SIGN UP
            <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content">
            <Link to={'/login'} style={ { textDecoration: "none"} }><p> LOG IN</p></Link>
            <Link to={'/signup'} style={ { textDecoration: "none"} }><p> SIGN UP</p></Link>
          </div>
        </div>
      }
      {
        authenticated &&
        <Link to={'/Myaccount'}><p className='menuItem'>YOUR ULTILEAGUE</p></Link>
      }
      {
        authenticated &&
        <Link to={'/logout'}><p className='menuItem'>Logout</p></Link>
      }

      <Link to={'/teams'} style={ { textDecoration: "none"} }> <p className='menuItem'>ULTILEAGUE</p></Link>

      <div className="logo" onClick={() => props.history.push('/')}>
        <img src={logo} alt="ulti-league-logo"></img>
      </div>

    </div>


  )
}

const mapStateToProps = state => ({
  authenticated: !!state.currentUser
})

export default withRouter(connect(mapStateToProps)(NavBar))
