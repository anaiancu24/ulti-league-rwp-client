import * as React from 'react'

export default function SignupForm(props) {
	return (
		<div className="signup-form">
			<form onSubmit={props.onSubmit}>
				<label>First name
  					<input type="text" name="firstName" value={props.values.firstName} onChange={props.onChange} />
				</label>
				<label> Last name
  					<input type="text" name="lastName" value={props.values.lastName} onChange={props.onChange} />
				</label>
				<label>Email
  					<input type="email" name="email" value={props.values.email} onChange={props.onChange} />
				</label>
				<label> I want to be a  	

					<form className='account-checkbox'>
						<input type="checkbox" name="account" value="Owner" onChange={props.onCheck}/>Owner<br />
						<input type="checkbox" name="account" value="player" onChange={props.onCheck}/>Player<br />
						<input type="checkbox" name="account" value="coach" onChange={props.onCheck}/>Coach <br />
						<input type="checkbox" name="account" value="fan" onChange={props.onCheck}/>Fan <br />
					</form>


				</label>
				<label>Password
  					<input type="password" name="password" value={props.values.password} onChange={props.onChange} />
				</label>
				<label>Confirm password
  					<input type="password" name="confirmPassword" value={props.values.confirmPassword} onChange={props.onChange} />
				</label>
				{
					props.values.password &&
					props.values.confirmPassword &&
					props.values.password !== props.values.confirmPassword &&
					<p style={{ color: 'red' }}>The passwords do not match!</p>
				}
				<button type="submit">Sign up</button>
			</form>
		</div>
	)
}
