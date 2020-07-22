import React from 'react';
import './App.css';
import HomePage from "./pages/HomePage/HomePage"
import SearchPage from "./pages/SearchPage/SearchPage"
import BookListElement from "./components/BookElementDetail/BookElementDetail"
import BookElement from "./components/BookElement/BookElement"
import Login from "./pages/LoginPage/Login"
import SignUp from "./pages/RegistrationPage/Registration"
import Landing from "./pages/LandingPage/landing"
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom'

const authintication={
  isLoggedIn : false,
  onAuthintication(){
    this.isLoggedIn=true
  },
  ofAuthintication(){
    this.isLoggedIn=false
  },
  getLoginStatus(){
  return this.isLoggedIn
  }
  }
  
   const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
      authintication.getLoginStatus() === true
        ? <Component {...props} />
        : <Redirect to='/' />
    )} />
  )
  

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
            <Route exact path="/" component={HomePage} />
            <Route exact path="/search" component={SearchPage} />
            <Route exact path="/search" component={BookElement} />
            <Route exact path="/favorite" component={BookListElement} />
        </Switch>
        </Router>
      </div>
    )
  };
}

export default App;
