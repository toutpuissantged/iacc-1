import { Link } from "react-router-dom"
import RouteMap from "../router/map"

export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <Link className='navbar-brand page-scroll' to={RouteMap.home}>
            Iacc groupes
          </Link>{' '}
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <Link to={RouteMap.home} className='page-scroll'>
                Accueil
              </Link>
            </li>
            <li>
            <Link to={RouteMap.missions} className='page-scroll'>
                voir Les Missions
              </Link>
            </li>
            <li>
              <Link to={RouteMap.blog} className='page-scroll'>
                Voir Les équipes
              </Link>
            </li>
            <li>
              <Link to={RouteMap.blog} className='page-scroll'>
                A propos de nous 
              </Link>
            </li>
            <li>
              <Link to={RouteMap.account} className='page-scroll'>
                Connexion
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}