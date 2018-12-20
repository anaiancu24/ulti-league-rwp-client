import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import InvestContainer from '../invest/InvestContainer'
import PickTeam from './PickTeam'


class SelectTeamContainer extends PureComponent {

	state = {
		shares: 0,
    teamId: null,
    step: 1
	}

	onSubmit = (event) => {
		event.preventDefault()
		// this.props.signUp(this.state) //---> This should be a PATCH call to the owner
		this.setState({
      shares: 0,
      teamId: null,
      step: 1
		})
	}

	onChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	handleNext = () => {
		this.setState({
			step: 2
		})
	}

	handleBuy = () => {
		this.onSubmit()
	}

	checkTeamOwner = (owner) => {
		if (owner.team) {
			this.setState({
				step: 2
			})
		}
	}
	
  render() {

		const { step } = this.state
		const { owner, teams } = this.props
		this.checkTeamOwner(owner)

		switch(step) {
			case 2:
				return (
					<div className="signupcontainer">
      			<InvestContainer values={this.state} onChange={this.onChange} handleBuy={this.handleBuy}/>
					</div>
				)
        default:
				return (
					<div className="signupcontainer">
          	<PickTeam teams={teams} handleNext={this.handleNext}/>
					</div>
				)
		}
	}
}

const mapStateToProps = function (state) {
	return {
		signup: state.signup,
		teams: state.teams,
		owner: state.owner
	}
}

export default connect(mapStateToProps)(SelectTeamContainer)
