import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import './invest.css'
import InvestInfo from './InvestInfo';
import ShareInfo from './ShareInfo';
import InvestConfirmation from './InvestConfirmation'



class InvestContainer extends PureComponent {
  state = {
    investment: null,
    toggle: false,
  }

  componentDidMount() {
  
  }

  onChange = (event) => {
    this.setState({
      investment: event.target.value
    })
  }

  toggleHandle = () => {
    this.setState({
      toggle: !this.state.toggle
    })
  }

  render() {
    return (
      <div className="invest-container">
        {
          (this.state.toggle === true) && <InvestConfirmation toggle={this.toggleHandle} />
        }
        <InvestInfo />
        <ShareInfo toggle={this.toggleHandle} onChange={this.onChange}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  authenticated: !!state.currentUser
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(InvestContainer)