import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import YourUpComingEvents from './YourUpComingEvents';
import './Dashboard.css'
import PersonalNewsFeed from './PersonalNewsFeed';
import FollowedTeams from './FollowedTeams';
import LeagueTable from './LeagueTable';
import DashboardTypeCTA from './AccountTypeCTA';
import TeamShares from './TeamShares';
import { loadUserData } from '../../actions/users';
import { userId } from '../../jwt'

class DashboardContainer extends PureComponent {
  componentDidMount() {
    console.log(this.props.userId)
    this.props.loadUserData(this.props.userId)
  }
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
  userId: state.currentUser && userId(state.currentUser.jwt),
  userData: state.userData,
  currentUser: state.currentUser,
  authenticated: !!state.currentUser
})

const mapDispatchToProps = {
  loadUserData

}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer)