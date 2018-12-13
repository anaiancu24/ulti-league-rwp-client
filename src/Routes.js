import React from 'react'
import {Route} from 'react-router-dom'
import HomePage from './components/home/HomePage'
import LogoutPage from './components/logout/LogoutPage';
import LoginFormContainer from './components/login/LoginFormContainer';
import SignupFormContainer from './components/signup/SignupFormContainer';
import PlayerProfileContainer from './components/players/PlayerProfileContainer';
import CoachProfileContainer from './components/coaches/CoachProfileContainer';
import TeamProfileContainer from './components/teams/TeamProfileContainer';
import OwnerProfileContainer from './components/owners/OwnerProfileContainer';
import PlayersOverviewContainer from './components/players/PlayersOverviewContainer';
import CoachesOverviewContainer from './components/coaches/CoachesOverviewContainer';
import OwnerOverviewContainer from './components/owners/OwnersOverviewContainer';
import TeamsOverviewContainer from './components/teams/TeamsOverviewContainer';
import DashboardContainer from './components/dashboard/DashboardContainer';
import YourTeamContainer from './components/yourteam/YourTeamContainer';

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
            <Route exact path="/communityowners/:id" component={OwnerProfileContainer} />
            <Route exact path="/players" component={PlayersOverviewContainer} />
            <Route exact path="/coaches" component={CoachesOverviewContainer} />
            <Route exact path="/communityowners" component={OwnerOverviewContainer} />
            <Route exact path="/teams" component={TeamsOverviewContainer} />
            <Route exact path="/Myaccount" component={DashboardContainer} />
            <Route exact path="/yourteam" component={YourTeamContainer} />
            </div>
  )
  }