import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import { signUp } from '../../actions/users'
//import SignupForm from './SignupForm'
import './signup.css'
import { Redirect } from 'react-router-dom'
//import signuppicture from '../../images/MaskGroup.svg'

class SignUp2 extends PureComponent {

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
            <div className="signup2">
            
				<h1 className='signup-title'>Hi! Let's get to know you!</h1>
				{/* <SignupForm onSubmit={this.onSubmit} onChange={this.onChange} values={this.state} onCheck={this.onCheck} /> */}
            
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

export default connect(mapStateToProps, { signUp })(SignUp2)
