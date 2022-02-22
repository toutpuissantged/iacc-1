import React from 'react'
import {Route , Routes} from 'react-router-dom'

import Home from '../pages/home'

// le composents Router permet de gérer les différentes routes
export default function Router() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
    </Routes>
  )
}
