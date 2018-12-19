import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import OwningSteps from './OwningSteps';
import './ownerlandingpage.css';
import { loadUserData } from '../../actions/users';
import { loadTeams } from '../../actions/teams';

import BecomeOwnerForm from './BecomeOwnerForm';
import WhyOwner from './WhyOwner';

class OwnerLandingPage extends PureComponent {

  componentWillMount() {
    this.props.loadUserData()
    this.props.loadTeams()
  }

  render() {
    return (
      <div className="owner-landing-page-container">
        <div className="owner-hero">
          <BecomeOwnerForm teams={this.props.teams}/>
        </div>
        <WhyOwner />
        <OwningSteps />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  teams: state.teams,
  authenticated: !!state.currentUser
})

const mapDispatchToProps = {
  loadUserData, loadTeams
}

export default connect(mapStateToProps, mapDispatchToProps)(OwnerLandingPage)