import React from 'react'
import {Route , Routes} from 'react-router-dom'

import Home from '../pages/home'
import Account from '../pages/account'
import Blog from '../pages/blog'
import Missions from '../pages/missions'
import RouteMap from './map'

// le composents Router permet de gérer les différentes routes ! nous utilisons react-router-dom donc nous respectons les conventions de react-router-dom
export default function Router() {
  return (
    <>
    <Routes>
        <Route  path={RouteMap.home} element={<Home />} />
        <Route  path={RouteMap.missions} element={<Missions />} />
        <Route path={RouteMap.account} element={<Account />} />
        <Route path={RouteMap.blog} element={<Blog />} />
    </Routes>
    </>
    
  )
}
