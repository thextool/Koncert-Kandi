import React, { Component } from 'react'
import ListOfLights from './ListOfLights'


class Home extends Component {

    render() {
        return (
        <div className='home-container'>
            <ListOfLights />
        </div>
        )
    }
}

export default Home