import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layouts/Header';
import './App.css';

import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';
import { withAuthenticator } from 'aws-amplify-react';

import ListaClases from './components/pages/ListaClases';
import ListaAsistentes from './components/pages/ListaAsistentes';

Amplify.configure(aws_exports);

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/clases" component={ListaClases} />
          <Route exact path="/asistentes" component={ListaAsistentes} />
          {/* <Route exact path="/" /> */}
        </div>
      </Router>
    );
  }
}

export default withAuthenticator(App, true);