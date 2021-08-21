import './App.scss';

import * as Sentry from '@sentry/react'
import { Integrations } from '@sentry/tracing'
import { Link, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Favorite from './pages/Favorite';
import Detail from './pages/Detail';

const sentryDSN = 'https://2a7ed4343cb44cef98b3d1a79551843d@o947482.ingest.sentry.io/5896861'

Sentry.init({
  dsn: sentryDSN,
  integrations: [new Integrations.BrowserTracing()],
  tracesSampleRate: 0.1,
})

const Navigation = () => {
  return (
    <div className="Header">
      <ul className="Nav">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/favorite">Favorite</Link>
        </li>
      </ul>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <main>
        <Navigation />
        <Switch>
          <Route exact path ='/' component={Home}/>
          <Route exact path ='/favorite' component={Favorite}/>
          <Route exact path ='/detail/:catid' component={Detail}/>
        </Switch>
      </main>
    </div>
  );
}

export default App;
