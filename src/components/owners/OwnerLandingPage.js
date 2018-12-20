import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import OwningSteps from './OwningSteps';
import './ownerlandingpage.css';
import { loadTeams } from '../../actions/teams';
import BecomeOwnerForm from './BecomeOwnerForm';
import WhyOwner from './WhyOwner';

class OwnerLandingPage extends PureComponent {
  state = {
		selectedTeam: null
	}

  componentWillMount() {
    this.props.loadTeams()

    if (!this.props.authenticated) this.props.history.push('/login')
    if (this.props.isOwner) this.props.history.push('/dashboard')
  }

	onSubmit = (event) => {
    event.preventDefault()
    if (this.state.selectedTeam !== 'default' && this.state.selectedTeam) this.props.history.push(`/owners/invest/${this.state.selectedTeam}`)
		this.setState({
			selectedTeam: null
		})
	}

	onSelect = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

  render() {
    return (
      <div className="owner-landing-page-container">
        <div className="owner-hero">
          <BecomeOwnerForm teams={this.props.teams} onSelect={this.onSelect} onSubmit={this.onSubmit}/>
        </div>
        <WhyOwner />
        <OwningSteps />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  teams: state.teams,
  authenticated: !!state.currentUser,
  isOwner: state.userData && state.userData.account.includes("owner")
  
})

const mapDispatchToProps = {
  loadTeams
}

export default connect(mapStateToProps, mapDispatchToProps)(OwnerLandingPage)