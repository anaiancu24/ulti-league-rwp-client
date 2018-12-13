import React, { PureComponent} from 'react';
import HomePageBanner from './HomePageBanner'
import './HomePageStyles.css';
import HomePageInfo from './HomePageInfo';
import UpdateFeed from './UpdateFeed';
import { connect } from 'react-redux'
import { loadEvents} from '../../actions/events'
import HomePageSlider from './HomePageSlider'

class HomePage extends PureComponent {

componentWillMount() {
    this.props.loadEvents()
  }

  render() {
    const { history, events } = this.props
    return (
      <div className="home-page">


      <div>
      <HomePageSlider />
      </div>
            
    {
    events && events.map(event => 
    <div key={event.id}><h1>Event name: {event.name}</h1> 
    {event.games.map(game => 
    <h2 key={game.id}>Game date: {game.date}</h2>)} </div>)}
        <HomePageBanner />
        <button onClick={() => history.push('/coaches/1')}>Coach Profile Test</button>
        <button onClick={() => history.push('/teams/1')}>Team Profile Test</button>
        <button onClick={() => history.push('/players/1')}>Player Profile Test</button>
        <button onClick={() => history.push('/communityowners/1')}>Community Owner Profile Test</button>
        <HomePageInfo />
        <UpdateFeed />
      </div>
    )
  }
}

const mapStateToProps = state => ({

  authenticated: !!state.currentUser,
  events: state.events && Object.values(state.events)
})

const mapDispatchToProps = {
  loadEvents
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)