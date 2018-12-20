import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { loadOwner, becomeOwner, updateOwner } from '../../actions/owners'
import { loadUserData } from '../../actions/users'
import './invest.css'
import InvestInfo from './InvestInfo';
import ShareInfo from './ShareInfo';
import InvestConfirmation from './InvestConfirmation'



class InvestContainer extends PureComponent {
  state = {
    investment: 10,
    toggle: false,
  }

  async componentWillMount() {
    if (!this.props.userData) {
      await this.props.loadUserData()
    }
  }


  onSubmit = () => {
    if (!this.props.owner) {
      this.props.becomeOwner(Number(this.props.match.params.id), this.state.investment)
    } else {
      this.props.updateOwner(this.props.owner.id, this.state.investment)
    }

    this.props.history.push('/yourteam')
  }

  onChange = (event) => {
    this.setState({
      investment: event.target.value
    })
  }

  toggleHandle = () => {
    if (this.props.userData.account.includes("owner")) {
      this.props.loadOwner()
    }
    this.setState({
      toggle: !this.state.toggle
    })
  }

  render() {
    return (
      <div className="invest-container">
        {
          (this.state.toggle === true) && <InvestConfirmation toggle={this.toggleHandle} onClick={this.onSubmit} />
        }
        <InvestInfo />
        <ShareInfo toggle={this.toggleHandle} onChange={this.onChange} />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  authenticated: !!state.currentUser,
  userData: state.userData,
  owner: state.owner
})

const mapDispatchToProps = {
  becomeOwner, loadUserData, loadOwner, updateOwner
}

export default connect(mapStateToProps, mapDispatchToProps)(InvestContainer)