import React from 'react';
import { Component } from 'react';
import Nav from "./components/nav/Nav";
import ApplicationViews from "./components/ApplicationViews";
import Login from "./components/auth/Login";
import './App.css';

class App extends Component {
  state= {
    user: true
  }
render(){
  return(
<>
{this.state.user ?(
  <>
  <ApplicationViews />
  <Nav />
  </>
):(
 <Login />
)}
</>
  )
}
}

export default App;
