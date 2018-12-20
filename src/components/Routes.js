import React from 'react'
import { Route } from 'react-router-dom'
import HomePage from './home/HomePage'
import LogoutPage from './logout/LogoutPage';
import LoginFormContainer from './login/LoginFormContainer';
import DashboardContainer from './dashboard/DashboardContainer';
import YourTeamContainer from './yourteam/YourTeamContainer';
import SignUp1 from './signup/SignUp1'
import OwnerLandingPage from './owners/OwnerLandingPage';
import InvestContainer from './invest/InvestContainer';
import SignUpContainer from './signup/SignUpContainer';
import Loading from './signup/Loading'

export default function Routes() {
  return (
    <div>
      <Route exact path="/login" component={LoginFormContainer} />
      <Route exact path="/signup/1" component={SignUp1} />
      <Route exact path="/signup/2" component={SignUpContainer} />
      <Route exact path="/loading" component={Loading} />

      <Route exact path="/" component={HomePage} />
      <Route exact path="/logout" component={LogoutPage} />
      <Route exact path="/owners/landingpage" component={OwnerLandingPage} />
      <Route exact path="/dashboard" component={DashboardContainer} />
      <Route exact path="/yourteam" component={YourTeamContainer} />
      <Route exact path="/owners/invest/:id" component={InvestContainer} />
    </div>
  )
}