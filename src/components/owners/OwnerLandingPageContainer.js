import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import OwningSteps from './OwningSteps';
import './ownerlandingpage.css';
import { loadOwner } from '../../actions/owners'
import BecomeOwnerForm from './BecomeOwnerForm';
import WhyOwner from './WhyOwner';

class OwnerProfileContainer extends PureComponent {

  render() {
    return (
      <div className="owner-landing-page-container">
        <div className="owner-hero">
          <BecomeOwnerForm />
        </div>
        <WhyOwner />
        <OwningSteps />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  authenticated: !!state.currentUser
})

const mapDispatchToProps = {
  loadOwner
}

export default connect(mapStateToProps, mapDispatchToProps)(OwnerProfileContainer)