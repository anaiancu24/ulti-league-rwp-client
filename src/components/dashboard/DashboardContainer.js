import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import YourUpComingEvents from './YourUpComingEvents';
import './Dashboard.css'
import PersonalNewsFeed from './PersonalNewsFeed';
import FollowedTeams from './FollowedTeams';
import LeagueTable from './LeagueTable';
import DashboardTypeCTA from './AccountTypeCTA';
import TeamShares from './TeamShares';

class DashboardContainer extends PureComponent {

  render() {
    return (
      <div>
        <h1>Dashboard</h1>
        <YourUpComingEvents />
        <PersonalNewsFeed />
        <FollowedTeams />
        <LeagueTable />
        <DashboardTypeCTA />
        <TeamShares />
      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({
  player: state.players && Object.values(state.players).find(player => player.id === (Number(props.match.params.id))),
  currentUser: state.currentUser,
  authenticated: !!state.currentUser
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer)