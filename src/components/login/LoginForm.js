import * as React from 'react'
import logo from '../../images/Group2.svg'
import { Link } from 'react-router-dom'


export default function LoginForm(props) {
	return (
		<div className="login-form">
			<img className="logologin" src={logo} alt="loog"></img>
			<form className="formlogin" onSubmit={props.onSubmit}>



				<div>
					<input className="inputboxupdate3" placeholder="Email address" type="email" name="email" value={props.values.email} onChange={props.onChange} />
				</div>
				<div>
					<input className="inputboxupdate3" placeholder="Password" type="password" name="password" value={props.values.password} onChange={props.onChange} />
				</div>



				<button className='login-form-button' type="submit">Login</button>

				<p className="inline2">Don't have an account?</p>
				<Link to='/signup/1'>
					<button className="loginbutton">Sign up</button>
				</Link>
			</form>
		</div>)
}

