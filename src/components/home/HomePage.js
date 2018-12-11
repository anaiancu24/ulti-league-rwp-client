import React, { PureComponent} from 'react';
import HomePageBanner from './HomePageBanner'
import './HomePageStyles.css';
import HomePageInfo from './HomePageInfo';
import UpdateFeed from './UpdateFeed';

export default class HomePage extends PureComponent {
  render() {
    const { history } = this.props
    return (
      <div className="home-page">
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