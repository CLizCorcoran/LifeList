import React from "react";
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";
import NavBar from "./NavBar.jsx";
import Contact from "./Contact.jsx";
import Login from "./Login.jsx";
import ListView from "./ListView.jsx";


const Hello = props => {
  if (props.user != "") {
    return <h1>Welcome {props.user}!</h1>
  }

  return null;
}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.login = this.login.bind(this);

    this.state = {user: ""};
  }

  login(username, password) {
    console.log("Welcome " + username + "!");
    this.setState({user: username});

    return true;  // Crazy how it always authenticates!  
  }


  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar />
          
          <Switch>
            <Route path="/list">
              <ListView user={this.state.user} />
            </Route> 
            <Route path="/contact" component={Contact} />
            <Route path="/login">
              <Login login={this.login} />
            </Route>
          </Switch>

        </div>
      </BrowserRouter>
    );
  };
};

export default App;
