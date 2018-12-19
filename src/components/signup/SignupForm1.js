import * as React from 'react'
import Radio from '@material-ui/core/Radio';


export default function SignupForm1(props) {
	return (
		<div className="signup-form">
			<form className="form1" onSubmit={props.onSubmit}>
				<div>
  					<input className="inputbox" placeholder="What's your first name?" type="text" name="firstName" value={props.values.firstName} onChange={props.onChange} />
				</div>
				<div> 
  					<input className="inputbox1" placeholder="and..last name?" type="text" name="lastName" value={props.values.lastName} onChange={props.onChange} />
				</div>
				<div>
  					<input className="inputbox" placeholder="How about e-mail?" type="email" name="email" value={props.values.email} onChange={props.onChange} />
				</div>
				<div> 
  					<input className="inputbox" placeholder="Create a password" type="text" name="password" value={props.values.password} onChange={props.onChange} />
				</div>
				<div> 
  					<input className="inputbox" placeholder="Confirm password" type="text" name="password" value={props.values.password} onChange={props.onChange} />
				</div>

				<p className="gender">When you were born, they thought you were:</p>
				<div className="genderoptions">
				<form className="genderoption">
				<Radio
          onChange={props.onCheck}
          value="Female"
          name="gender"
          
        />
				{/* <input className="genderoption1" type="checkbox" name="gender" value="Female" onChange={props.onCheck}/>Female
				<input className="genderoption1" type="checkbox" name="gender" value="Male" onChange={props.onCheck}/>Male */}

				<p className="birthdate">Which day was that?</p>

				<form className="dobform">
    <div>
    

<select className="dayselect" name='day' id='dayddl'>
<option value=''>Day</option>
<option value='1'>1</option>
<option value='2'>2</option>
<option value='3'>3</option>
<option value='4'>4</option>
<option value='5'>5</option>
<option value='6'>6</option>
<option value='7'>7</option>
<option value='8'>8</option>
<option value='9'>9</option>
<option value='10'>10</option>
<option value='11'>11</option>
<option value='12'>12</option>
<option value='13'>13</option>
<option value='14'>14</option>
<option value='15'>15</option>
<option value='16'>16</option>
<option value='17'>17</option>
<option value='18'>18</option>
<option value='19'>19</option>
<option value='20'>20</option>
<option value='21'>21</option>
<option value='22'>22</option>
<option value='23'>23</option>
<option value='24'>24</option>
<option value='25'>25</option>
<option value='26'>26</option>
<option value='27'>27</option>
<option value='28'>28</option>
<option value='29'>29</option>
<option value='30'>30</option>
<option value='31'>31</option>
</select>



<select className="monthselect" name='month' id='monthddl'>
<option value=''>Month</option>
<option value='1'>1</option>
<option value='2'>2</option>
<option value='3'>3</option>
<option value='4'>4</option>
<option value='5'>5</option>
<option value='6'>6</option>
<option value='7'>7</option>
<option value='8'>8</option>
<option value='9'>9</option>
<option value='10'>10</option>
<option value='11'>11</option>
<option value='12'>12</option>
</select>



<select className="yearselect" name='day' id='blah'>
<option value=''>Year</option>
<option value='1947'>1947</option>
<option value='1948'>1948</option>
<option value='1949'>1949</option>
<option value='1950'>1950</option>
<option value='1951'>1951</option>
<option value='1952'>1952</option>
<option value='1953'>1953</option>
<option value='1954'>1954</option>
<option value='1955'>1955</option>
<option value='1956'>1956</option>
<option value='1957'>1957</option>
<option value='1958'>1958</option>
<option value='1959'>1959</option>
<option value='1960'>1960</option>
<option value='1961'>1961</option>
<option value='1962'>1962</option>
<option value='1963'>1963</option>
<option value='1964'>1964</option>
<option value='1965'>1965</option>
<option value='1966'>1966</option>
<option value='1967'>1967</option>
<option value='1968'>1968</option>
<option value='1969'>1969</option>
<option value='1970'>1970</option>
<option value='1971'>1971</option>
<option value='1972'>1972</option>
<option value='1973'>1973</option>
<option value='1974'>1974</option>
<option value='1975'>1975</option>
<option value='1976'>1976</option>
<option value='1977'>1977</option>
<option value='1978'>1978</option>
<option value='1979'>1979</option>
<option value='1980'>1980</option>
<option value='1981'>1981</option>
<option value='1982'>1982</option>
<option value='1983'>1983</option>
<option value='1984'>1984</option>
<option value='1985'>1985</option>
<option value='1986'>1986</option>
<option value='1987'>1987</option>
<option value='1988'>1988</option>
<option value='1989'>1989</option>
<option value='1990'>1990</option>
<option value='1991'>1991</option>
<option value='1992'>1992</option>
<option value='1993'>1993</option>
</select>

    </div>
    </form>



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