import React, { PureComponent } from 'react'
import { connect } from 'react-redux'




class BecomeOwnerContainer extends PureComponent {

  /* componentDidMount() {
    this.props.loadPlayer(Number(this.props.match.params.id))
  } */

  render() {
    return (
      <div className="become-owner-container">
        <h1>Become owner container</h1>
        <h2>About</h2>
        <button>Buy ownership</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  authenticated: !!state.currentUser
})

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(BecomeOwnerContainer)
