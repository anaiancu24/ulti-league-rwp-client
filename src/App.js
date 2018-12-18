import React, { PureComponent } from 'react';
import { BrowserRouter } from 'react-router-dom'
import NavBar from './components/layout/NavBar'
import Footer from './components/layout/Footer'
import Routes from './components/Routes'
import './App.css';

class App extends PureComponent {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <main>
            <Routes />
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
