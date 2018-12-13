import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import CoachProfile from './CoachProfile';
import { loadCoach } from '../../actions/coaches'


class CoachProfileContainer extends PureComponent {

  componentDidMount() {
    this.props.loadCoach(Number(this.props.match.params.id))
  }

  render() {
    return (
      <div className="coach-profile-container">
        <CoachProfile coach={this.props.coach} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  coach: state.coach,
  authenticated: !!state.currentUser
})

const mapDispatchToProps = {
  loadCoach
}

export default connect(mapStateToProps, mapDispatchToProps)(CoachProfileContainer)