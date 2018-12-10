import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { Route, Redirect } from 'react-router-dom'
import HomePage from './components/home/HomePage'
import './App.css';

class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Route exact path="/" component={HomePage} />
          <Route path="" render={() => <Redirect to="/" />} />
        </div>
      </Provider>
    );
  }
}

export default App;
