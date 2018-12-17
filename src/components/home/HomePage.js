import React, { PureComponent } from 'react';
import HomePageBanner from './HomePageBanner'
import './HomePageStyles.css';
import HomePagePromo from './HomePagePromo';
import UpdateFeed from './UpdateFeed';
import { connect } from 'react-redux'
import { loadEvents } from '../../actions/events'
import HomePageCard from './HomePageCard';

class HomePage extends PureComponent {

  componentWillMount() {
    this.props.loadEvents()
  }

  render() {
    const { history, events } = this.props
    return (
      <div className="home-page">
        <div className="hero">
          <HomePageBanner />
        </div>
        <div className="promo">
          <HomePagePromo />
          <HomePageCard className="support-team-promo" tagName="support-team-tag"/>
          <HomePageCard className="join-and-play-promo" tagName="join-and-play-tag" />
          <HomePageCard className="support-players-promo" tagName="support-players-tag" />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  authenticated: !!state.currentUser,
  events: state.events
})

const mapDispatchToProps = {
  loadEvents
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)