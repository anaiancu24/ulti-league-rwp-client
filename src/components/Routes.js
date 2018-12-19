import React from 'react'
import { Route } from 'react-router-dom'
import HomePage from './home/HomePage'
import LogoutPage from './logout/LogoutPage';
import LoginFormContainer from './login/LoginFormContainer';
//import SignupFormContainer from './signup/SignupFormContainer';
import PlayerProfileContainer from './players/PlayerProfileContainer';
import CoachProfileContainer from './coaches/CoachProfileContainer';
import TeamProfileContainer from './teams/TeamProfileContainer';
import OwnerProfileContainer from './owners/OwnerProfileContainer';
import PlayersOverviewContainer from './players/PlayersOverviewContainer';
import CoachesOverviewContainer from './coaches/CoachesOverviewContainer';
import OwnerOverviewContainer from './owners/OwnersOverviewContainer';
import TeamsOverviewContainer from './teams/TeamsOverviewContainer';
import DashboardContainer from './dashboard/DashboardContainer';
import YourTeamContainer from './yourteam/YourTeamContainer';
import SignUp1 from './signup/SignUp1'
import SignUp2 from './signup/SignUp2'

export default function Routes() {
  return (
    <div>
      <Route exact path="/login" component={LoginFormContainer} />
      {/* <Route exact path="/signup" component={SignupFormContainer} /> */}
      <Route exact path="/signup/1" component={SignUp1} />
      <Route exact path="/signup/2" component={SignUp2} />


      <Route exact path="/" component={HomePage} />
      <Route exact path="/logout" component={LogoutPage} />
      <Route exact path="/players/:id" component={PlayerProfileContainer} />
      <Route exact path="/coaches/:id" component={CoachProfileContainer} />
      <Route exact path="/teams/:id" component={TeamProfileContainer} />
      <Route exact path="/communityowners/:id" component={OwnerProfileContainer} />
      <Route exact path="/players" component={PlayersOverviewContainer} />
      <Route exact path="/coaches" component={CoachesOverviewContainer} />
      <Route exact path="/communityowners" component={OwnerOverviewContainer} />
      <Route exact path="/teams" component={TeamsOverviewContainer} />
      <Route exact path="/dashboard" component={DashboardContainer} />
      <Route exact path="/yourteam" component={YourTeamContainer} />
    </div>
  )
}