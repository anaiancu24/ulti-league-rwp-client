import * as React from 'react'
import logo from '../../images/Group2.svg'
import { Link } from 'react-router-dom'
import './Login.css'



export default function LoginForm(props) {
	return (
		<div className="login-page2">
			<form className="formlogin2" onSubmit={props.onSubmit}>
			<img className="logologin2" src={logo} alt="loog"></img>




				<div>
					<input className="inputboxupdate3" placeholder="Email address" type="email" name="email" value={props.values.email} onChange={props.onChange} />
				</div>
				<div>
					<input className="inputboxupdate3" placeholder="Password" type="password" name="password" value={props.values.password} onChange={props.onChange} />
				</div>



				<button className='login-form-button2' type="submit">Login</button>

				<p className="inline2">Don't have an account?</p>
				<Link to='/signup/1'>
					<button className="loginbutton2">Sign up</button>
				</Link>
			</form>
		</div>)
}

