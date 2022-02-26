import React, { Component } from 'react'
import { Navigation } from '../components/navigation'
import { SignupForm } from './components/SignupForm.js'

export default class AccountPages extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <SignupForm />
      </div>
      
    )
  }
}