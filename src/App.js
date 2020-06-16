import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import './App.css'
import Menu from '../src/components/Menu'
import SubRoute from '../src/components/SubRoute'
import HomePage from '../src/components/HomePage'
import DriftPage from '../src/components/DriftPage'
import TimeAttackPage from '../src/components/TimeAttackPage'
import ForzaPage from '../src/components/ForzaPage'

function App() {
  const routes = [
    {
      path: '/',
      exact: true,
      title: 'Home',
      component: HomePage,
    },
    {
      path: '/drift',
      exact: false,
      title: 'Drift School',
      component: DriftPage,
    },
    {
      path: '/timeattack',
      exact: false,
      title: 'Time Attack',
      component: TimeAttackPage,
    },
    {
      path: '/forza',
      exact: false,
      title: 'Forza Karting',
      component: ForzaPage,
    },
  ]

  return (
    <Router>
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Race Taxi</title>
        </Helmet>
        <Menu routes={routes} />
        <div className="page">
          {/* {routes.map((route, i) => (
            <Route key={i} exact={route.exact} component={route.component} />
          ))} */}
          {/* {routes.map((route, i) => (
            <SubRoute key={i} {...route} />
          ))} */}
          <Route path="/" exact component={HomePage} />
          <Route path="/drift" component={DriftPage} />
          <Route path="/timeattack" component={TimeAttackPage} />
          <Route path="/forza" component={ForzaPage} />
        </div>
      </div>
    </Router>
  )
}

export default App
