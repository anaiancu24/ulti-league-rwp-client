import React, { PureComponent } from 'react';
import HomePageBanner from './HomePageBanner'
import './HomePageStyles.css';
import HomePagePromo from './HomePagePromo';
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
          <HomePageCard className="join-and-play-promo" tagName="join-and-play-tag" />
          <HomePageCard className="support-team-promo" tagName="support-team-tag" />
          <HomePageCard className="support-players-promo" tagName="support-players-tag" />
          <HomePageCard className="follow-promo" tagName="follow-tag" />
          <div className="description-promo">
            <h2>Ultimate Frisbee is awesome!</h2>
            <p>Unfortunately, it is also costly to participate in all the great tournaments. Travelling from city to city, country to country, or even contintent to continent ain’t cheap!</p>
            <p>You can now support your favorite teams and help make the sport more popular. As a team co-owner you help your favorite teams play by investing in them. The money goes towards covering their travel expenses and you get to co-decide this season’s squad selection together with the coach and players!</p>
          </div>
          <HomePageCard className="nominate-promo" tagName="nominate-tag" />
          <HomePageCard className="owner-promo" tagName="owner-tag" />
        </div>
        <div className="draft-promo">
          <div className="draft-header"></div>
          <div className="be-you"></div>
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