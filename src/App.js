import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomePage from './components/home/HomePage'
import NavBar from './components/layout/NavBar'
import LogoutPage from './components/logout/LogoutPage';
import LoginFormContainer from './components/login/LoginFormContainer';
import SignupFormContainer from './components/signup/SignupFormContainer';
import PlayerProfileContainer from './components/players/PlayerProfileContainer';
import CoachProfileContainer from './components/coaches/CoachProfileContainer';
import TeamProfileContainer from './components/teams/TeamProfileContainer';
import CommunityOwnerProfileContainer from './components/communityOwners/CommunityOwnerProfileContainer';
import Footer from './components/layout/Footer'
import './App.css';


class App extends PureComponent {
  render() {
    return (
      <Router>
        <div className="App">
          <nav>
            <NavBar />
          </nav>
          <main>
            <Route exact path="/login" component={LoginFormContainer} />
            <Route exact path="/signup" component={SignupFormContainer} />
            <Route exact path="/" component={HomePage} />
            <Route exact path="/logout" component={LogoutPage} />
            <Route exact path="/players/:id" component={PlayerProfileContainer} />
            <Route exact path="/coaches/:id" component={CoachProfileContainer} />
            <Route exact path="/teams/:id" component={TeamProfileContainer} />
            <Route exact path="/communityOwners/:id" component={CommunityOwnerProfileContainer} />
          </main>
          <footer>
            <Footer />
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;
