import React from 'react'
import { Route } from 'react-router-dom'
import HomePage from './home/HomePage'
import LogoutPage from './logout/LogoutPage';
import LoginFormContainer from './login/LoginFormContainer';
import SignupFormContainer from './signup/SignupFormContainer';
import OwnerLandingPage from './owners/OwnerLandingPage';
import DashboardContainer from './dashboard/DashboardContainer';
import YourTeamContainer from './yourteam/YourTeamContainer';
import InvestContainer from './invest/InvestContainer';

export default function Routes() {
  return (
    <div>
      <Route exact path="/login" component={LoginFormContainer} />
      <Route exact path="/signup" component={SignupFormContainer} />
      <Route exact path="/" component={HomePage} />
      <Route exact path="/logout" component={LogoutPage} />
      <Route exact path="/owners/landingpage" component={OwnerLandingPage} />
      <Route exact path="/dashboard" component={DashboardContainer} />
      <Route exact path="/yourteam" component={YourTeamContainer} />
      <Route exact path="/owners/invest/:id" component={InvestContainer} />
    </div>
  )
}