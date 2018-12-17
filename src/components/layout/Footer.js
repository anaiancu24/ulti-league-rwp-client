import React from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'


const Footer = (props) => {
  return (
    <div className="footer">
      <h3>Contact</h3>
    </div>
  )
}

const mapStateToProps = state => ({

})

export default withRouter(connect(mapStateToProps)(Footer))
