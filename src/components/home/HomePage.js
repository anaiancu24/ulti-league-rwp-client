import * as React from 'react';
import HomePageBanner from './HomePageBanner'
import './HomePageStyles.css';

export default class HomePage extends React.Component {
  render() {
    return (
      <div>
        <HomePageBanner />
        <h1>Ulti-League!!!!</h1>
        <h2>Share your passion for ultimate-frisbee!</h2>
      </div>
    )
  }
}