import React, { Component } from 'react'
import { Navigation } from '../components/navigation'

import SignUpScreen from './signUp'


export default class AccountPages extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <SignUpScreen />
      </div>
      
    )
  }
}