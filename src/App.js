import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/navBar'
import { Route, Switch } from 'react-router-dom';
import AllBeers from './components/AllBeers';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';

function App() {
  return (
    <div className="App">
      <AllBeers />
{/* 
      <Switch>
        <Route exact path="/" render={(props) => <Home {...props} />}/>
        <Route exact path="AllBeers" render={(props) => <AllBeers {...props} />}/>
        <Route exact path="RandomBeer" render={(props) => <RandomBeer {...props} />}/>
        <Route exact path="NewBeer" render={(props) => <RandomBeer {...props} />}/>
      </Switch> */}
    </div>
  );
}
export default App;
