import * as React from 'react'

export default function SignupForm1(props) {
	return (
		<div className="signup-form">
			<form className="form1" onSubmit={props.onSubmit}>
				<div className="firstname">
  					<input placeholder="What's your first name?" type="text" name="firstName" value={props.values.firstName} onChange={props.onChange} />
				</div>
				<div className="lastname"> 
  					<input placeholder="and..last name?" type="text" name="lastName" value={props.values.lastName} onChange={props.onChange} />
				</div>
				<div className="email">
  					<input placeholder="What's your first name?" type="email" name="email" value={props.values.email} onChange={props.onChange} />
				</div>

				<p className="gender">When you were born, they thought you were:</p>
				<div className="genderoptions">
				<form className="genderoption">
				<input type="checkbox" name="gender" value="Female" onChange={props.onCheck}/>Female
				<input type="checkbox" name="gender" value="Male" onChange={props.onCheck}/>Male

				<p className="birthdate">Which day was that?</p>



				</form>

				</div>


				
			</form>
		</div>
	)
}



/* <label> I want to be a  	

					<form className='account-checkbox'>
						<input type="checkbox" name="account" value="owner" onChange={props.onCheck}/>Owner<br />
						<input type="checkbox" name="account" value="player" onChange={props.onCheck}/>Player<br />
						<input type="checkbox" name="account" value="coach" onChange={props.onCheck}/>Coach <br />
						<input type="checkbox" name="account" value="fan" onChange={props.onCheck}/>Fan <br />
					</form>


				</label> */
				/* <label>Password
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
				<button type="submit">Sign up</button> */