import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import HomePage from './components/home/HomePage'
import NavBar from './components/layout/NavBar'
import LogoutPage from './components/logout/LogoutPage';
import './App.css';
import LoginFormContainer from './components/login/LoginFormContainer';
import SignupFormContainer from './components/signup/SignupFormContainer';

class App extends PureComponent {
  render() {
    return (
      <Router>
        <div className="App">
          <nav>
            <NavBar />
          </nav>
          <Route exact path="/login" component={LoginFormContainer} />
          <Route exact path="/signup" component={SignupFormContainer} />
          <Route exact path="/" component={HomePage} />
          <Route exact path="/logout" component={LogoutPage} />
          <Route path="" render={() => <Redirect to="/" />} />
        </div>
      </Router>
    );
  }
}

export default App;
