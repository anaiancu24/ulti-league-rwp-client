import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

class PlayersFilter extends PureComponent {

  render() {
    return (
      <div className="draft-selector-filter">
      <input type="checkbox" /> Males 
      <input type="checkbox" /> Females
      <input type="text" placeholder="Search.." />
      <button>Sort by Alphabet</button>
      </div>
    )
  }
}



const mapStateToProps = state => ({
  authenticated: !!state.currentUser
})

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayersFilter)
