import React, { PureComponent} from 'react';
import HomePageBanner from './HomePageBanner'
import './HomePageStyles.css';
import HomePageInfo from './HomePageInfo';
import UpdateFeed from './UpdateFeed';
import { Redirect } from 'react-router-dom'


export default class HomePage extends PureComponent {
  render() {
    return (
      <div className="home-page">
        <HomePageBanner />
        <button onClick={() => <Redirect to="/coaches/1" />}>Coach Profile Test</button>
        <button onClick={() => <Redirect to="/teams/1" />}>Team Profile Test</button>
        <button onClick={() => <Redirect to="/players/1" />}>Player Profile Test</button>
        <button onClick={() => <Redirect to="/communityOwners/1" />}>Community Owner Profile Test</button>
        <HomePageInfo />
        <UpdateFeed />
      </div>
    )
  }
}