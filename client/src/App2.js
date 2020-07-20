import React from 'react';
import './App.css';
import SearchBooks from './components/Search/Search.js';
import Falist from './pages/FavouritePage/Favourite.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Readlater from './pages/ReadLaterPage/ReadLater.js';

//switch between search page & favorite page and read later page
class App2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false,
    };
  }
  setUserAuth = (value) => this.setState({ isAuthenticated: value });
  render() {
    return (
      <div className='app'>
        <Router>
          <Switch>
            <Route path='/auth/Search'>
              <SearchBooks setUserAuth={this.setUserAuth} id='s' />
            </Route>
            <Route exact path='/auth/Fav'>
              <Falist setUserAuth={this.setUserAuth} />
            </Route>
            <Route exact path='/auth/read'>
              <Readlater setUserAuth={this.setUserAuth} />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App2;
