import React from 'react';
// import logo from '../components/assets/images/logo.svg';
// import './App.css';
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom'

import Index from '../pages/Index';
import NotFound from '../pages/NotFound';
import Calendar from '../pages/calendar/Calendar'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Index} />
        <Route path="/calendar" component={Calendar} />
        <Route path="/404" component={NotFound}/>
        <Redirect to="/404" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
