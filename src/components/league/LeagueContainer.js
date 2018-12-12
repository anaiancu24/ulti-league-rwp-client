import React, { PureComponent } from 'react'
import { connect } from 'react-redux'




class LeagueContainer extends PureComponent {

  /* componentDidMount() {
    this.props.loadPlayer(Number(this.props.match.params.id))
  } */

  render() {
    return (
      <div className="league-container">
        <h1>Teams</h1>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  authenticated: !!state.currentUser
})

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(LeagueContainer)
