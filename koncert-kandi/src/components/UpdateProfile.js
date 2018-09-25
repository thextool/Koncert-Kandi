import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'


class UpdateProfile extends Component {

    state = {
        post: {
            first_name: '',
            last_name: '',
        },
        redirect: false
    }

    handleChange = (event) => {
        const target = event.target
        const value = target.value
        const name = target.name

        this.setState(
        {...this.state,post:{...this.state.post,[name]: value}}
        )
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const body = JSON.stringify(this.state.post)
        
        fetch('https://koncert-kandi.herokuapp.com/user-data/edit/1',{
        method: 'PUT',
        headers: {
            "Content-type": "application/json"
        },
        body: body
        })
        .then(res => res.status===200 ? this.setRedirect() : console.log('not working'))
        
        event.target.reset()
    }

    setRedirect = () => {
        this.setState({
        redirect: true
        })
    }

    renderRedirect = () => {
        if (this.state.redirect) {
        return <Redirect to='/' />
        }
    }

    render() {
        return (
        <div className='form-container'>
            <form className='form' onSubmit={this.handleSubmit} >
            <div className='form-div'>
                <label htmlFor='first_name'>First Name:</label>
                <input type='text' name='first_name' onChange={this.handleChange} />
            </div>
            <div className='form-div'>
                <label htmlFor='last_name'>Last Name:</label>
                <input type='text' name='last_name' onChange={this.handleChange} />
            </div>
            <div className='form-button'>
                <input type='submit' name='submit' value='Save' />
            </div>
            </form>
            {this.renderRedirect()}
        </div>
        )
    }
}

export default UpdateProfile;