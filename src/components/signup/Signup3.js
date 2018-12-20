import React, { PureComponent } from 'react'
import './signup.css'
import icon from '../../images/arrow.svg'


export default class SignUp3 extends PureComponent {

  render() {
    return (
      <div className="signup2">
        <h1 className="signup-title2">Do you already know what <br /> you want to do?</h1>
        <p className="subtitle2">You can select multiple</p>
        <form className="accounttype" onSubmit={this.props.onSubmit}>
          <div>
          <label class="container">Play in UltiLeague!
              <input type="checkbox" className="player" onClick={this.props.onCheck}/>
              <span class="checkmark"></span>
              <i class="material-icons" style={{marginLeft: "10px"}}>info</i>
            </label>
          </div>
          <div>
          <label class="container">Coach in UltiLeague!
              <input type="checkbox" className="coach" onClick={this.props.onCheck}/>
              <span class="checkmark"></span>
              <i class="material-icons" style={{marginLeft: "10px"}}>info</i>
            </label>
          </div>
          <div>
        <label class="container">Become an UltiLeague team season supporter!
              <input type="checkbox" className="owner" onClick={this.props.onCheck}/>
              <span class="checkmark"></span>
              <i class="material-icons" style={{marginLeft: "10px"}}>info</i>
            </label>
          </div>
          <div>
          <label class="container">No, I think just an account for now is fine!
              <input type="checkbox" className="member" onClick={this.props.onCheck}/>
              <span class="checkmark"></span>
              <i class="material-icons" style={{marginLeft: "10px"}}>info</i>
            </label>
          </div>
          <div className="buttons">
          <img className="icon2" onClick={this.props.handleBack} src={icon} alt="iconn"></img>

            <span className="backbutton" onClick={this.props.handleBack}>  
            Back
            </span> 
            <button className="nextsignup2" onClick={this.handleDone}><b>Done!</b></button>
          </div>
        </form>
      </div>
		)
	}
}
