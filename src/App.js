import React from 'react';
import './App.css';
import NavBar from './components/navBar'
import { Route, Switch } from 'react-router-dom';
import Home from './components/home'
import AllBeers from './components/AllBeers';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';
import BeerDetails from './components/beerDetails';
import IronRest from './components/IronRest';



function App() {
  return (
    <div className="App">
    {/* <RandomBeer/> */}
      <NavBar />
      <Switch>
        <Route exact path="/" render={(props) => <Home {...props} />}/>
        <Route exact path="/AllBeers" render={(props) => <AllBeers {...props} />}/>
        <Route exact path="/RandomBeer" render={(props) => <RandomBeer {...props} />}/>
        <Route exact path="/AllBeers/:id" render={(props) => <BeerDetails {...props} />}/>
        <Route exact path="/NewBeer" render={(props) => <NewBeer {...props} />}/>
        <Route exact path="/IronRest" render={(props) => <IronRest {...props} />}/>
        <Route path="" render={() => <p>Not Found</p>}/>
      </Switch>
    </div>
  );
}
export default App;
