import React, { Component } from 'react'
import { Navigation } from '../components/navigation'
<<<<<<< HEAD
import { SignupForm } from './components/SignupForm.js'
=======
import AccountUi from '../components/account/index'
>>>>>>> 6e98d41f90b3c0b68e69268ca345da9ad24a78e4

export default class AccountPages extends Component {
  render() {
    return (
      <div>
        <Navigation />
<<<<<<< HEAD
        <SignupForm />
=======
        <AccountUi />
        <h1>Account</h1>
>>>>>>> 6e98d41f90b3c0b68e69268ca345da9ad24a78e4
      </div>
      
    )
  }
}