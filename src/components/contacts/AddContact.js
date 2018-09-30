import React, { Component } from 'react'
import { Consumer } from '../../Context'
import TextInputGroup from '../layout/TextInputGroup'
import axios from 'axios'

export default class AddContact extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    error: {}
  }

  onSubmit = async (dispatch, e) => {
    e.preventDefault()

    const { name, email, phone } = this.state

    const newContact = {
      name,
      email,
      phone
    }

    // for error Checking OR validation for input fields
    if (name === '') {
      this.setState({ error: { name: 'Name is required' } })
      return
    }

    if (email === '') {
      this.setState({ error: { email: 'email is required' } })
      return
    }

    if (phone === '') {
      this.setState({ error: { phone: 'phone is required' } })
      return
    }

    const res = await axios.post(
      'https://jsonplaceholder.typicode.com/posts',
      newContact
    )
    dispatch({ type: 'ADD_CONTACT', payload: res.data })

    this.setState({
      name: '',
      email: '',
      phone: '',
      error: {}
    })

    this.props.history.push('/')
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value })

  render () {
    const { name, phone, email, error } = this.state

    return (
      <Consumer>
        {value => {
          const { dispatch } = value
          return (
            <div className='card mb-3'>
              <div className='card-header'> Add Contact </div>
              <div className='card-body'>
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>

                  <TextInputGroup
                    name='name'
                    label='Name'
                    value={name}
                    placeholder='Enter Name...'
                    onChange={this.onChange}
                    error={error.name}
                  />

                  <TextInputGroup
                    name='email'
                    label='Email'
                    type='text'
                    value={email}
                    placeholder='Enter Email...'
                    onChange={this.onChange}
                    error={error.email}
                  />

                  <TextInputGroup
                    name='phone'
                    label='Phone'
                    value={phone}
                    placeholder='Phone Name...'
                    onChange={this.onChange}
                    error={error.phone}
                  />

                  <input type='submit' className='btn btn-blue' />
                </form>

              </div>
            </div>
          )
        }}
      </Consumer>
    )
  }
}
