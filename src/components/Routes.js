import React from 'react'
import { Route } from 'react-router-dom'
import HomePage from './home/HomePage'
import LogoutPage from './logout/LogoutPage';
import LoginFormContainer from './login/LoginFormContainer';
import SignupFormContainer from './signup/SignupFormContainer';
import PlayerProfileContainer from './players/PlayerProfileContainer';
import CoachProfileContainer from './coaches/CoachProfileContainer';
import TeamProfileContainer from './teams/TeamProfileContainer';
import OwnerLandingPage from './owners/OwnerLandingPage';
import PlayersOverviewContainer from './players/PlayersOverviewContainer';
import CoachesOverviewContainer from './coaches/CoachesOverviewContainer';
import TeamsOverviewContainer from './teams/TeamsOverviewContainer';
import DashboardContainer from './dashboard/DashboardContainer';
import YourTeamContainer from './yourteam/YourTeamContainer';

export default function Routes() {
  return (
    <div>
      <Route exact path="/login" component={LoginFormContainer} />
      <Route exact path="/signup" component={SignupFormContainer} />
      <Route exact path="/" component={HomePage} />
      <Route exact path="/logout" component={LogoutPage} />
      <Route exact path="/players/:id" component={PlayerProfileContainer} />
      <Route exact path="/coaches/:id" component={CoachProfileContainer} />
      <Route exact path="/teams/:id" component={TeamProfileContainer} />
      <Route exact path="/owners/landingpage" component={OwnerLandingPage} />
      <Route exact path="/players" component={PlayersOverviewContainer} />
      <Route exact path="/coaches" component={CoachesOverviewContainer} />
      <Route exact path="/teams" component={TeamsOverviewContainer} />
      <Route exact path="/dashboard" component={DashboardContainer} />
      <Route exact path="/yourteam" component={YourTeamContainer} />
    </div>
  )
}