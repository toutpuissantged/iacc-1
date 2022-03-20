import React, { Component } from 'react'
import { Navigation } from '../components/navigation'

import SignUpScreen from './signUp'
import Login from '../components/auth/login'


export default class AccountPages extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <SignUpScreen />
        <Login />
      </div>
      
    )
  }
}