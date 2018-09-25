import React, { Component } from 'react'

class ListOfLights extends Component {

    state = {}

    componentDidMount() {
        fetch('https://koncert-kandi.herokuapp.com/connections')
        .then(response => response.json())
        .then(connections => {
            this.setState({connections : connections})
        })
    }

    render(){
        return (
            <div className="list-group">
                <h1>Your Kandi </h1>
                <div className="list-group-item list-group-item-action flex-column align-items-start active">
                <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">Gene Name: Merica</h5>
                </div>
                <p className="mb-1">color pattern preview</p>
                <small>Colors: Red, White, and Blue</small>
                </div>
                <h2>Your Connections </h2>
                <div className="list-group-item list-group-item-action flex-column align-items-start">
                <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">Gene Name: Rainbow</h5>
                    <small className="text-muted">Collected: 3 days ago</small>
                </div>
                <p className="mb-1">color pattern preview</p>
                <small>Colors: Red, Orange, Yellow, Green, Blue, Indigo, and Violet</small>
                </div>
                <div className="list-group-item list-group-item-action flex-column align-items-start">
                <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">Gene Name: Sir Biff</h5>
                    <small className="text-muted">Collected: 3 days ago</small>
                </div>
                <p className="mb-1">color pattern preview</p>
                <small>Colors: Green and Orange</small>
                </div>
            </div>
        )
    } 
}

export default ListOfLights