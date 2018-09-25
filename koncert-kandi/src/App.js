import React, { Component } from 'react';
import 'leaflet/dist/leaflet.css';
import Header from './components/Header'
import Home from './components/Home'
import UpdateProfile from './components/UpdateProfile'
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch  } from 'react-router-dom'


class App extends Component {

  render() {
    return (
      <Router>
        <div className='app'>
          <Header />
          <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route path='/update-profile' component={UpdateProfile} ></Route>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;


