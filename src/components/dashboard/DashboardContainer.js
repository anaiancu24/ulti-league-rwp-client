import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import YourUpComingEvents from './YourUpComingEvents';
import './Dashboard2.css'
import PersonalNewsFeed from './PersonalNewsFeed';
import LeagueTable from './LeagueTable';
import DraftSelection from './DraftSelection'
import { loadEvents } from '../../actions/events';
import { loadOwner } from '../../actions/owners';
import { loadUserData } from '../../actions/users'
import { userId } from '../../jwt'
import YouTube from 'react-youtube'
import SpiritHolder from './SpiritHolder';

class DashboardContainer extends PureComponent {

  componentWillMount() {
    if (!this.props.authenticated) {
      this.props.history.push('/login')
    }
    this.props.loadUserData()
    this.props.loadEvents()
    this.props.loadOwner()
  }

  onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  investClick = () => {
    if (!this.props.isOwner) {
      console.log(1)
      this.props.history.push('/owners/landingpage')
    } else if (this.props.isOwner && this.props.owner.team) {
      console.log(2)
      this.props.history.push(`/owners/invest/${this.props.owner.team.id}`)
    } else {
      console.log(3)
      this.props.history.push('/owners/landingpage')
    }
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


        {
          this.props.currentUser && this.props.userData && this.props.userData.account.includes('owner') && this.props.team && this.props.owner &&
          <div className='draft'>
            <DraftSelection team={this.props.team} owner={this.props.owner}/>
          </div>
        }

        <div className='league'>
          <LeagueTable />
        </div>


        {
          this.props.currentUser && this.props.userData && this.props.userData.account.includes('owner') && this.props.team &&
          <div className="events">
            <YourUpComingEvents team={this.props.team}/>
          </div>
        }

        <div className="newsfeed">
          <PersonalNewsFeed />
        </div>


        <div className="spiritholder">
          <SpiritHolder userData={this.props.userData} investClick={this.investClick} />

        </div>

      </div >
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
  team: state.owner && state.owner.team,
  isOwner: !!state.owner,
})

const mapDispatchToProps = {
  loadEvents,
  loadOwner,
  loadUserData

}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer)