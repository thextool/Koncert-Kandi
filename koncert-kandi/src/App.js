import React, { Component } from 'react';
import Header from './components/Header'
import Home from './components/Home'
import UpdateProfile from './components/UpdateProfile'
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch  } from 'react-router-dom'


class App extends Component {

  state = {}

  componentDidMount() {
    fetch('https://koncert-kandi.herokuapp.com/connections')
      .then(response => response.json())
      .then(connections => {
        this.setState({connections : connections})
      })
  }


  render() {
    return (
      <Router>
        <div className='app'>
          <Header />
          <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route path='/update-profile' component={UpdateProfile} ></Route>
            {/* <Route path='/new-user' component={NewUser}></Route> */} */}
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;


