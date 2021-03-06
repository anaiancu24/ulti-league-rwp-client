import React, { PureComponent} from 'react';
import { connect } from 'react-redux'
import { login } from '../../actions/users'
import LoginForm from './LoginForm'
import { Redirect } from 'react-router-dom'
import './Login.css'

class LoginFormContainer extends PureComponent {
	state = {
		email: '',
		password: ''
	}

	onSubmit = (event) => {
		event.preventDefault()
		this.props.login(this.state)
		this.setState({
			firstName: '',
			lastName: '',
			email: '',
			password: '',
			confirmPassword: ''
		})
	}

	onChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	render() {
		if (this.props.currentUser) return (
			<Redirect to="/dashboard" />
		)

		return (
			<div className="login-page">
			<div className='login-form-container'>
				<p>Login</p>
				<LoginForm onSubmit={this.onSubmit} onChange={this.onChange} values={this.state} />
				{this.props.error &&
					<span style={{ color: 'red' }}>{this.props.error}</span>}
			</div>
			</div>
		)
	}
}

const mapStateToProps = function (state) {
	return {
		currentUser: state.currentUser,
		error: state.login.error
	}
}

export default connect(mapStateToProps, { login })(LoginFormContainer)