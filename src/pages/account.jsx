import React, { Component } from 'react'
import { Navigation } from '../components/navigation'
import AccountUi from '../components/account/index'

export default class AccountPages extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <AccountUi />
        <h1>Account</h1>
      </div>
      
    )
  }
}