import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { signUp } from '../../actions/users'
import { Redirect } from 'react-router-dom'
import SignUp2 from './SignUp2'
import SignUp3 from './Signup3'
import Loading from './Loading'


class SignUpContainer extends PureComponent {

	state = {
		firstName: '',
    lastName: '',
		email: '',
		password: '',
		confirmPassword: '',
    account: ["member"],
    step: 1
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
			account: ["member"]
		})
	}

	onChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	onCheck = (event) => {
		if (this.state.account.includes(event.target.className)) {
			console.log('ok')
			this.setState({
				account: this.state.account.filter(acc => acc !== event.target.className)
			})
		}
		else {
			console.log("not ok")
			console.log(event.target.className)

			this.setState({
				account: [...this.state.account, event.target.className]
      })
      console.log(this.state.account)
		}
	}

  handleBack = () => {
    this.setState({
      step: 1
    })
	}
  
  handleNext = () => {
    this.setState({
      step: 2
    })
  }
	
	handleDone = () => {
    this.setState({
      step: 3
    })
  }


	render() {

		if (this.props.signup.success) return (<Redirect to="/loading" />)

		const { step } = this.state

		switch(step) {
			case 1:
				return (
					<div className="signupcontainer">
      			<SignUp2 values={this.state} onChange={this.onChange} handleNext={this.handleNext}/>
					</div>
				)
			case 2:
				return (
					<div className="signupcontainer">
          	<SignUp3 onCheck={this.onCheck} handleBack={this.handleBack} handleDone={this.handleDone} 
						onSubmit={this.onSubmit}/>
					</div>
				)
			default:
				return (
					<div className="signupcontainer">
          	<Loading />
					</div>
				)
		}
	}
}

const mapStateToProps = function (state) {
	return {
		signup: state.signup
	}
}

export default connect(mapStateToProps, { signUp })(SignUpContainer)
