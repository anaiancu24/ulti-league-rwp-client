import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import YourUpComingEvents from './YourUpComingEvents';
import './Dashboard2.css'
import PersonalNewsFeed from './PersonalNewsFeed';
//import FollowedTeams from './FollowedTeams';
import LeagueTable from './LeagueTable';
// import DashboardTypeCTA from './AccountTypeCTA';
//import TeamShares from './TeamShares';
import DraftSelection from './DraftSelection'
import { loadUserData } from '../../actions/users';
import { userId } from '../../jwt'
import YouTube from 'react-youtube'
import SpiritHolder from './SpiritHolder';

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
      height: '80%',
      width: '80%',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 0
      }
    };
  

    return (
      <div className='dashboard'>
      <div className='youtube'>
      <button className="label">Latest videos</button>

<div className="ytbox">
         <YouTube
        videoId="2g811Eo7K8U"
        opts={opts}
        onReady={this.onReady}
      />
      </div>
      
      </div>

      <div className='draft'>
        <DraftSelection />
        </div>  

        {/* <div className='teams'>
        <FollowedTeams />
        </div> */}

        <div className='league'>
        <LeagueTable />
        </div>

        <div className="events">
        <YourUpComingEvents />
        </div>

        <div className="newsfeed">
        <PersonalNewsFeed />
        </div>

        <div className="spiritholder">
        <SpiritHolder />
        
        </div>

       
     
        {/* <div className='cta'>
        <DashboardTypeCTA />
        </div> */}

        {/* <div className='shares'>
        <TeamShares />
        </div>  */}

        
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