import React, { PureComponent} from 'react';
import HomePageBanner from './HomePageBanner'
import './HomePageStyles.css';
import HomePageInfo from './HomePageInfo';
import UpdateFeed from './UpdateFeed';

export default class HomePage extends PureComponent {
  render() {
    return (
      <div className="home-page">
        <HomePageBanner />
        <HomePageInfo />
        <UpdateFeed />
      </div>
    )
  }
}