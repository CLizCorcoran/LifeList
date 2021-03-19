import React from "react";
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";
import NavBar from "./NavBar.jsx";
import Contact from "./Contact.jsx";
import LoginContainer from "../containers/LoginContainer.js";
import ListAddContainer from "../containers/ListAddContainer.js";
import EditContainer from "../containers/EditContainer.js";
import ListViewContainer from "../containers/ListViewContainer.js";


class App extends React.Component {
   
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar />
          
          <Switch>
            <Redirect exact from='/' to='/list' />
            <Route exact path="/list" component={ListViewContainer} />
            <Route path="/list/add" component={ListAddContainer} />
            <Route path="/list/edit/:id" component={EditContainer} />
            <Route path="/contact" component={Contact} />
            <Route path="/login" component={LoginContainer} />
          </Switch>

        </div>
      </BrowserRouter>
    );
  };
};

export default App;
