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
import YouTube from 'react-youtube'

class DashboardContainer extends PureComponent {
  componentDidMount() {
    console.log(this.props.userId)
    this.props.loadUserData(this.props.userId)
  }




  onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  render() {



    const opts = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 0
      }
    };
  

    return (
      <div>
        <h1>Dashboard</h1>

         <YouTube
        videoId="2g811Eo7K8U"
        opts={opts}
        onReady={this.onReady}
      />

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