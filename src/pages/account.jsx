import React, { Component } from 'react'
import { Navigation } from '../components/navigation'

import SignUpScreen from './signUp'
import AccountUi from '../components/account/index'


export default class AccountPages extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <SignUpScreen />
        <AccountUi />
      </div>
      
    )
  }
}