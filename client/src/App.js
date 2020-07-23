import React from 'react';
import './App.css';
import HomePage from "./pages/HomePage/HomePage"
import SearchPage from "./pages/SearchPage/SearchPage"
// import BookListElement from "./components/BookElementDetail/BookElementDetail"
// import BookElement from "./components/BookElement/BookElement"
import {Login, authintication} from "./pages/LoginPage/Login"
import SignUp from "./pages/RegistrationPage/Registration"
import Landing from "./pages/LandingPage/landing"
// import FavPage from "./pages/FavouritePage/Favourite"
import { BrowserRouter as Router,Switch, Route,Redirect  } from 'react-router-dom'


   const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
      authintication.getLoginStatus() === true
        ? <Component {...props} />
        : <Redirect to='/' />
    )} />
  )
  class NotFound extends React.Component {
    render() {
      return (
        <h1>404 NOT FOUND</h1>
      )
    }
  }

// //main component
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (


      <div className='app'>
            <Router>
            <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/signUp" component={SignUp} />
            <Route exact path="/login" component={Login} />
            <PrivateRoute exact path="/home" component={HomePage}></PrivateRoute>
            <PrivateRoute exact path="/search" component={SearchPage} ></PrivateRoute>
            {/* <PrivateRoute exact path="/favorite" component={FavPage} ></PrivateRoute> */}
            <Route path="*" component={NotFound}  />
            {/* <PrivateRoute exact path="/logout" component={FavPage} ></PrivateRoute> */}
        </Switch>
        </Router>
      </div>
    )
  };
}

export default App;
