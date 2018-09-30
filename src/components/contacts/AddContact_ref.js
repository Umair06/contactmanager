import React, { Component } from 'react'

export default class AddContact extends Component {
  constructor (props) {
    super(props)
    this.nameInput = React.createRef()
    this.emailInput = React.createRef()
    this.phoneInput = React.createRef()
  }
  state = {
    name: '',
    email: '',
    phone: ''
  }

  

  onSubmit = e => {
    e.preventDefault()
    const contact = {
      name: this.nameInput.current.value,
      email: this.emailInput.current.value,
      phone: this.phoneInput.current.value
    }
    console.log(contact)
  }

  static defaultProps = {
    name: 'Faizan',
    email: 'faizanKhan@gmail.com',
    phone: '888-8888-888'
  }

  render () {
    const { name, phone, email } = this.props
    return (
      <div className='card mb-3'>
        <div className='card-header'> Add Contact </div>
        <div className='card-body'>
          <form onSubmit={this.onSubmit}>
            <div className='form-group'>
              <label htmlFor='name'>Name</label>
              <input
                type='text'
                className='form-control form-control-lg'
                name='name'
                placeholder='Name Here...'
                defaultValue={name}
                ref={this.nameInput}
              />
            </div>

            <div className='form-group'>
              <label htmlFor='name'>Email</label>
              <input
                type='text'
                className='form-control form-control-lg'
                name='email'
                placeholder='Email Here...'
                defaultValue={email}
                ref={this.emailInput}
              />
            </div>

            <div className='form-group'>
              <label htmlFor='phone'>Phone</label>
              <input
                type='text'
                className='form-control form-control-lg'
                name='phone'
                placeholder='Phone Here...'
                defaultValue={phone}
                ref={this.phoneInput}
              />
            </div>
            <input type='submit' className='btn btn-blue' />
          </form>

        </div>
      </div>
    )
  }
}
