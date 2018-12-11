import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import HomePage from './components/home/HomePage';
import LogoutPage from './components/logout/LogoutPage';
import './App.css';

class App extends PureComponent {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={HomePage} />
          <Route exact path="/logout" component={LogoutPage} />
          <Route path="" render={() => <Redirect to="/" />} />
        </div>
      </Router>
    );
  }
}

export default App;
