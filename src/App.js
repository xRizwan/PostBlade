import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Loading from './Components/Loading';
import Navbar from './Components/Navbar.js';
import AuthenticationService from './Services/authetication-service';
import Posts from './Components/Posts';
import User from './Components/User';

function App() {
  const [state, setState] = useState({
    isLogged: false,
    loading: true,
  })
  
  useEffect(() => {
    const isLogged = AuthenticationService.checkUser()

    setState({
      loading: false,
      isLogged: !!isLogged,
    })

  }, [])

  const handleLogout = () => {
    AuthenticationService.logoutUser();
    setState({
      ...state,
      isLogged: false,
    })
  }

  const handleLogin = () => {
    AuthenticationService.loginUser();
    setState({
      ...state,
      isLogged: true,
    })
  }

  if (state.loading) return <Loading />

  return (
    <Router>
      <Navbar isLogged={state.isLogged} onLogin={handleLogin} onLogout={handleLogout} />
      <Switch>

        <Route exact path="/">
          <div className="centered headingText">
            {state.isLogged ? "Welcome" : "Please Login!"}
          </div>
        </Route>
        
        <Route exact path="/posts">
          <Posts isLogged={state.isLogged} />
        </Route>
        
        <Route exact path="/users/:id">
          <User isLogged={state.isLogged} />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;