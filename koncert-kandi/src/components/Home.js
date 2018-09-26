import React, { Component } from 'react'
import ListOfLights from './ListOfLights'
import Map from './Map'


class Home extends Component {

    // state = {
    //     connections: [],
    //     userData: []
    // }

    // componentDidMount() {
    //     fetch('https://koncert-kandi.herokuapp.com/connections')
    //     .then(response => response.json())
    //     .then(connections => {
    //         this.setState({connections : connections})
    //     })
        

    //     fetch('https://koncert-kandi.herokuapp.com/user-data')
    //     .then(response => response.json())
    //     .then(userData => {
    //         this.setState({userData : userData})
    //     })
    // }

    render() {
        return (
        <div className='home-container'>
            <ListOfLights />
            <Map />
        </div>
        )
    }
}

export default Home