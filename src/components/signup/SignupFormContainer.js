import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import { signUp } from '../../actions/users'
import SignupForm from './SignupForm'
import './signup.css'
import { Redirect } from 'react-router-dom'

class SignupFormContainer extends PureComponent {

	state = {
		firstName: '',
		lastName: '',
		email: '',
		password: '',
		confirmPassword: '',
		account: []
	}

	onSubmit = (event) => {
		event.preventDefault()
		this.props.signUp(this.state)
		this.setState({
			firstName: '',
			lastName: '',
			email: '',
			password: '',
			confirmPassword: '',
			account: []
		})
	}

	onChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	onCheck = (event) => {
		if (this.state.account.includes(event.target.value)) {
			this.setState({
				account: this.state.account.filter(account => account !== event.target.value)
			})
		}
		else {
			this.setState({
				account: this.state.account.concat(event.target.value)
			})
		}
	}


	render() {
	
		if (this.props.signup.success) return (<Redirect to="/login" />)
		return (
			<div className="sign-up-form">
				<h1>Sign up</h1>
				<SignupForm onSubmit={this.onSubmit} onChange={this.onChange} values={this.state} onCheck={this.onCheck} />
				<p style={{ color: 'red' }}>{this.props.signup.error}</p>
			</div>
		)
	}
}

const mapStateToProps = function (state) {
	return {
		signup: state.signup
	}
}

export default connect(mapStateToProps, { signUp })(SignupFormContainer)
