import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './components/Header';
import NotFound from './components/NotFound';
import Home from './components/Home';
import Submit from './components/Submit';

import './App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <BrowserRouter>
          <div>
            <Header />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/submit" component={Submit} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}

export default App;
