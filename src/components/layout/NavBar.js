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
    <nav>
      <div className="logo" onClick={() => props.history.push('/')}>
        <img src={logo} alt="ulti-league-logo"></img>
      </div>

      <div className="menu">
        {
          !authenticated &&
          <div className="dropdown">
            <button className="dropbtn">LOG IN / SIGN UP
              <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content">
              <Link to={'/login'} style={{ textDecoration: "none" }}><p> LOG IN</p></Link>
              <Link to={'/signup'} style={{ textDecoration: "none" }}><p> SIGN UP</p></Link>
            </div>
          </div>
        }
      
        {
          authenticated &&
          <Link to={'/logout'} style={{ textDecoration: "none" }}><p className='menuItem'>LOGOUT</p></Link>
        }
        {
          authenticated &&
          <Link to={'/dashboard'} style={{ textDecoration: "none" }}><p className='menuItem'>YOUR ULTILEAGUE</p></Link>
        }


        <Link to={'/teams'} style={{ textDecoration: "none" }}> <p className='ulti-league'>ULTILEAGUE</p></Link>

      </div>

      <div className="search">
        <input type="text" placeholder="..."></input>
        <img src={searchIcon} alt="search-icon"></img>
      </div>



    </nav>


  )
}

const mapStateToProps = state => ({
  authenticated: !!state.currentUser
})

export default withRouter(connect(mapStateToProps)(NavBar))
