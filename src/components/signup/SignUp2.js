import React, { PureComponent } from 'react';
import './signup.css'

export default class SignUp2 extends PureComponent {

    render() {

        return (
            <div className="signup2">

                <h1 className='signup-title'>Hi! Let's get to know you!</h1>
                <div className="signup-form">
                    <form className="form2" onSubmit={this.props.onSubmit}>
                        <div>
                            <input className="inputboxupdate" placeholder="What's your first name?" type="text" name="firstName" value={this.props.values.firstName} onChange={this.props.onChange} />
                        </div>
                        <div>
                            <input className="inputbox1update" placeholder="and..last name?" type="text" name="lastName" value={this.props.values.lastName} onChange={this.props.onChange} />
                        </div>
                        <div>
                            <input className="inputboxupdate" placeholder="How about e-mail?" type="email" name="email" value={this.props.values.email} onChange={this.props.onChange} />
                        </div>
                        <div>
                            <input className="inputboxupdate" placeholder="Create a password" type="password" name="password" value={this.props.values.password} onChange={this.props.onChange} />
                        </div>
                        <div>
                            <input className="inputboxupdate" placeholder="Confirm password" type="password" name="confirmPassword" value={this.props.values.confirmPassword} onChange={this.props.onChange} />
                        </div>

                        <p className="gender">When you were born, they thought you were:</p>
                        
                       <div className="genderoptions">
                            <label className="gender-option-container">Female
                                <input className="gender1" class="with-gap" name="gender" type="radio" value="female" onChange={this.props.onCheck} />
                                <span className="checkmark"></span>
                            </label>

                            <label  className="gender-option-container">Male
                                <input className="gender2" class="with-gap" name="gender" type="radio" value="male" onChange={this.props.onCheck} />
                                <span className="checkmark"></span>
                            </label>
                        </div>


                        <p className="birthdate">Which day was that?</p>
<div className='selects'>
<select className="day browser-default">
<option value="" disabled selected>Day</option>

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
  <select className="day browser-default">
    <option value="" disabled selected>Month</option>
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
  <select className="day browser-default">
    <option value="" disabled selected>Year</option>
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

                </div>





                <button onClick={this.props.handleNext} className="nextsignup2">Next</button>

            </div>
        )
    }
}


