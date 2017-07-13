import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './components/Header';
import Home from './components/Home';
import Submit from './components/Submit';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Home} />
            <Route exact path="/submit" component={Submit} />
          </div>
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}

export default App;
