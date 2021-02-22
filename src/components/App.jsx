import React from "react";
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";
import NavBar from "./NavBar.jsx";
import Contact from "./Contact.jsx";
import LoginContainer from "../containers/LoginContainer.js";
import ListAddContainer from "../containers/ListAddContainer.js";
import ListViewContainer from "../containers/ListViewContainer.js";


const Hello = props => {
  if (props.user != "") {
    return <h1>Welcome {props.user}!</h1>
  }

  return null;
}

class App extends React.Component {
  constructor(props) {
    super(props);

    //this.login = this.login.bind(this);

    //this.state = {user: ""};
  }

  /*
  login(username, password) {
    console.log("Welcome " + username + "!");
    this.setState({user: username});

    return true;  // Crazy how it always authenticates!  
  }
  */


  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar />
          
          <Switch>
            <Route exact path="/list" component={ListViewContainer} />;
            <Route path="/list/add" component={ListAddContainer} />
            <Route path="/contact" component={Contact} />
            <Route path="/login" component={LoginContainer} />
          </Switch>

        </div>
      </BrowserRouter>
    );
  };
};

export default App;
