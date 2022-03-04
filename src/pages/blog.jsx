import React, { Component } from 'react'
import { Navigation } from '../components/navigation'
//import DataBase from '../core/database'

//const iaccDb = new DataBase('iacc','1.0',3)
//console.log(iaccDb.size_of()); 

export default class BlogPages extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <h1>Blog</h1>
      </div>
    )
  }
}
