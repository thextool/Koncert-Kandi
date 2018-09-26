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
            <div className='form-group mx-sm-3 mb-2'>
                <label htmlFor='first_name'>First Name:</label>
                <input className='form-control col-form-label-sm' type='text' name='first_name' onChange={this.handleChange} placeholder="Enter First Name" />
                
            </div>
            <div className='form-group mx-sm-3 mb-2'>
                <label htmlFor='last_name'>Last Name:</label>
                <input className='form-control' type='text' name='last_name' onChange={this.handleChange} placeholder="Enter Last Name" />
                <small id="emailHelp" class="form-text text-muted form-control-sm">Your info is not shared when you connect with other people.</small>
            </div>
            <div className='form-button'>
                <input class="btn btn-primary" type='submit' name='submit' value='Save' />
            </div>
            </form>
            {this.renderRedirect()}
        </div>
        )
    }
}

export default UpdateProfile;