import React from 'react'
import {Route , Routes} from 'react-router-dom'

import Home from '../pages/home'
import Account from '../pages/account'
import Blog from '../pages/blog'

// le composents Router permet de gérer les différentes routes ! nous utilisons react-router-dom donc nous respectons les conventions de react-router-dom
export default function Router() {
  return (
    <>
    <Routes>
        <Route  path="/" element={<Home />} />
        <Route path="/account" element={<Account />} />
        <Route path="/blog" element={<Blog />} />
    </Routes>
    </>
    
  )
}
