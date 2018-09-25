import React, { Component } from 'react'
import ListOfLights from './ListOfLights'
import Map from './Map'


class Home extends Component {

    render() {
        return (
        <div className='home-container'>
            <ListOfLights />
            {/* <div className='map-container'> */}
                <Map />
            {/* </div> */}
        </div>
        )
    }
}

export default Home