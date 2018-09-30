import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Contacts from './components/contacts/Contacts'
import About from './components/pages/About'
import NotFoundPage from './components/pages/NotFoundPage'
import Header from './components/layout/Header'
import AddContact from './components/contacts/AddContact'
import EditContact from './components/contacts/EditContact'
import { Provider } from './Context'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

class App extends Component {
  render () {
    return (
      <Provider>
        <Router>
          <div className='App'>
            <Header branding='Contact Manager' />
            <div className='container'>
              <Switch>
                <Route exact path='/' component={Contacts} />
                <Route exact path='/about' component={About} />
                <Route exact path='/add/contact' component={AddContact} />
                <Route exact path='/contact/edit/:id' component={EditContact} />
                <Route component={NotFoundPage} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App
