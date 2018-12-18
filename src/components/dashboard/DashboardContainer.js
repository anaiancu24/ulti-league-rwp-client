import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import YourUpComingEvents from './YourUpComingEvents';
import './Dashboard2.css'
import PersonalNewsFeed from './PersonalNewsFeed';
import FollowedTeams from './FollowedTeams';
import LeagueTable from './LeagueTable';
// import DashboardTypeCTA from './AccountTypeCTA';
import TeamShares from './TeamShares';
import DraftSelection from './DraftSelection'
import { loadEvents } from '../../actions/events';
import { loadOwner } from '../../actions/owners';
import { loadUserData} from '../../actions/users'
import { userId } from '../../jwt'
import YouTube from 'react-youtube'

class DashboardContainer extends PureComponent {

  componentWillMount() {
    this.props.loadEvents()
    this.props.loadOwner()
    this.props.loadUserData()
  }

  onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  render() {
    const opts = {
      height: '100%',
      width: '100%',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 0
      }
    };
    return (
      <div className='dashboard'>

      <div className='youtube'>

         <YouTube
        videoId="2g811Eo7K8U"
        opts={opts}
        onReady={this.onReady}
      />

      </div>

      <div className='draft'>
        <DraftSelection />
        </div>  

        <div className='teams'>
        <YourUpComingEvents />
        <PersonalNewsFeed />

        <FollowedTeams />
        </div>

        <div className='league'>
        <LeagueTable />
        </div>

        <div className="events">
        <YourUpComingEvents />
        </div>

        <div className="newsfeed">
        <PersonalNewsFeed />
        </div>
     
        {/* <div className='cta'>
        <DashboardTypeCTA />
        </div> */}

        <div className='shares'>
        <TeamShares />
        </div> 

          {this.props.events && <p>{this.props.events[0].name}</p> }
          {this.props.owner && <p>{this.props.owner.shares}</p> }
          {this.props.userData && <p>{this.props.userData.firstName}</p> }
      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({
  userId: state.currentUser && userId(state.currentUser.jwt),
  userData: state.userData,
  currentUser: state.currentUser,
  authenticated: !!state.currentUser,
  events: state.events,
  owner: state.owner,
  
})

const mapDispatchToProps = {
  loadEvents,
  loadOwner,
  loadUserData

}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer)