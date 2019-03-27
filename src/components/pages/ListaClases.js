import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Clases from '../Clases';
import ListaAsistentes from './ListaAsistentes';

function ListaClases() {
  return (
    <Router>
      <React.Fragment>
        <Clases />
        <Route exact path="/asistentes" component={ListaAsistentes} />
      </React.Fragment>
    </Router>
  )
}

export default ListaClases