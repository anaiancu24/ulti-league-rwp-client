import React, { PureComponent } from 'react';
import './signup.css'
import { Link } from 'react-router-dom'

export default class SignUp1 extends PureComponent {
	render() {
		return (
			<div className="sign-up-form">
				<div className="sign-up1">
					<h1 className='signuptitle'>Create an account to get {"\n"}started</h1>
					<div className='signupbuttons'>
						<div className='facebookbutton'>
							<p className="facebookmethod">Continue with Facebook</p>
						</div>
						<div className='googlebutton'>
							<p className="googlemethod">Continue with Google</p>

						</div>
						<p className='or'> or </p>
						<Link to='/signup/2' style={{ textDecoration: 'none' }}>

							<div className='emailbutton'>

								<p className="emailmethod">Sign up with Email</p>

							</div>
						</Link>


					</div>
					<p className="privacytext">By clicking Sign up or Continue with, I agree to {"\n"}UltiLeague’s Terms of Service, Payments Terms of {"\n"}Service, Privacy Policy, and Nondiscrimination Policy.</p>
					<div>
						<p className="inline2">Already have an account?</p>
						<Link to='/login'>
							<button className="loginbutton">Log in</button>
						</Link>
					</div>
				</div>
			</div>
		)
	}
}


