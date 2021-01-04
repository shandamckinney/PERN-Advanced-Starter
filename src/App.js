import React, {Component} from 'react';
// import PropTypes from 'prop-types';
// import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import HomePage from './views/HomePage/HomePage.js';
// import LoginPage from './views/LoginPage/LoginPage.js';
// import Components from './views/Components/Components.js';
// import LandingPage from './views/LandingPage/LandingPage.js';
// import ProfilePage from './views/ProfilePage/ProfilePage.js';
// import UserPage from './views/UserPage/UserPage.js';

// import ScrollToTop from "components/ScrollTop/ScrollTop.js";
// import Header from "components/Header/Header.js";
// import HeaderLinks from "components/Header/HeaderLinks.js";
// import Footer from "components/Footer/HomeFooter.jsx";

// import "assets/scss/material-kit-react.scss";

// const indexRoutes = [
//   { path: "/login", name: "LoginPage", component: LoginPage },
//   { path: "/about", name: "AboutPage", component: About },
//   { path: "/", name: "Components", component: App }
// ];

class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
       usersList: []
    };
  }

  getUsersList = () => {
    fetch('/api/users/all')
    .then(res => res.json())
    .then(res => {
      var usersList = res.map(r => r.name);
      this.setState({ usersList });
    });
  };
  componentDidMount () {
    this.getUsersList();
    console.log('connecting to db')
  }
  
  render(){
    return (
      <div>
        HELLO
        <span>{ this.state.usersList.map((city, i) => <p key={i}>{city}</p>) }</span>
      </div>
    )
  }

}
export default App;
